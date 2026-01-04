// @ts-ignore - Node.js built-in modules
import { fileURLToPath } from 'url';
// @ts-ignore - Node.js built-in modules
import { join } from 'path';
import { projectContents } from '$lib/components/projects/ProjectContent';
// @ts-ignore - Node.js built-in modules
import { readFile } from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = join(__filename, '..');
const RESUME_DOCX_PATH = join(__dirname, '..', 'assets', 'resume.docx');

export const extractResumeText = async (): Promise<string | null> => {
	try {
		const mammothModule = await import('mammoth').catch(() => null);
		if (!mammothModule) {
			//console.warn('mammoth not installed. Resume text extraction skipped.');
			return null;
		}

		const mammoth = (mammothModule as any).default || mammothModule;

		if (!mammoth || !mammoth.extractRawText) {
			//console.warn('mammoth not available. Resume text extraction skipped.');
			return null;
		}

		const buffer = await readFile(RESUME_DOCX_PATH);
		const result = await mammoth.extractRawText({ buffer });
		return result.value;
	} catch (error) {
		console.error('Error extracting resume text:', error);
		return null;
	}
};

export const buildContext = async (): Promise<string> => {
	const projectsContext = projectContents
		.map((project) => {
			const techStack = project.techStack
				.map((tech) => {
					if ('packages' in tech && tech.packages) {
						return `${tech.language} (${tech.packages.join(', ')})`;
					}
					return tech.language;
				})
				.join(', ');

			return `Project: ${project.title}
Description: ${project.description}
Technologies: ${techStack}
${project.gitHubLink ? `GitHub: ${project.gitHubLink}` : ''}
${project.demoLink ? `Demo: ${project.demoLink}` : ''}`;
		})
		.join('\n\n');

	const resumeText = await extractResumeText();
	const resumeContext = resumeText
		? `\n\nResume Information:\n${resumeText}`
		: '\n\nNote: Resume information is available at https://drive.google.com/file/d/1QW0Az1AvOdzulRqyY0XDTCKrFNTMl__9/preview';

	const context = `You are Brian Cho who is a software developer and engineer. You want to help visitors, mainly recruiters and potential employers, to learn about you.

Here is information about Brian's projects and resume:

${projectsContext}${resumeContext}

Please help answer questions in summary on the information provided above. Be informative and accurate, but in short and concise manner. Try to keep it in one paragraph.`;

	return context;
};
