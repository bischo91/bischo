//import Button from "@mui/material/Button";
import { GoogleGenAI } from "@google/genai";
import { Link } from "react-scroll";
import React from "react";
import profile_animated from "../asset/profile_animated.png";
import profile_pic from "../asset/profile.png";

const apiKey = process.env.REACT_APP_GEMINI_API_KEY;
const ai = new GoogleGenAI({ apiKey: apiKey });
const SYSTEM_INSTRUCTION = "";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.scrollArrow = React.createRef();
    this.state = {
      chat: null,
      messages: [],
      input: "",
      isLoading: false,
      openDialog: false,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSendMessage = this.handleSendMessage.bind(this);
    this.handleClickOpen = this.handleClickOpen.bind(this);
  }

  componentDidMount() {
    //console.log("API Key:", import.meta.env);
    // Change page title
    document.title = "Brian Cho";
    // Scroll to stop when page loaded
    window.scrollTo(0, 0);
    // Fetch data from API defined by admin
    window.addEventListener("resize", this.handleResize);
    this.handleResize();

    const newChat = ai.chats.create({
      model: "gemini-2.5-flash",
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });
    this.setState({
      chat: newChat,
      messages: [
        {
          role: "system",
          text: "Chat initialized! How can I help you with your React project?",
        },
      ],
    });
  }

  handleInputChange(e) {
    this.setState({ openDialog: true });
  }

  handleClickOpen(e) {
    this.setState({ input: e.target.value });
  }

  async handleSendMessage(e) {
    e.preventDefault();
    const { input, isLoading, chat, messages } = this.state;

    if (!input.trim() || isLoading || !chat) return;

    const userMessage = input.trim();

    // Optimistic state update before API call
    this.setState({
      input: "",
      isLoading: true,
      messages: [...messages, { role: "user", text: userMessage }],
    });

    try {
      // Send the message to the Gemini chat session
      const result = await chat.sendMessage({
        message: userMessage,
      });

      // Update the chat history with the model's response
      this.setState((prevState) => ({
        messages: [
          ...prevState.messages,
          { role: "assistant", text: result.text },
        ],
      }));
    } catch (error) {
      console.error("Error sending message:", error);
      this.setState((prevState) => ({
        messages: [
          ...prevState.messages,
          {
            role: "system",
            text: "Sorry, I encountered an error. Please try again.",
          },
        ],
      }));
    } finally {
      this.setState({ isLoading: false });
    }
  }
  handleResize = () => {
    // Hide scroll arrow when the window is too small
    if (this.scrollArrow.current !== null) {
      if (window.innerHeight < 720 && window.innerWidth > 639) {
        this.scrollArrow.current.classList.add("hidden");
      } else if (window.innerHeight < 615) {
        this.scrollArrow.current.classList.add("hidden");
      } else {
        this.scrollArrow.current.classList.remove("hidden");
      }
    }
  };

  render() {
    const { messages, input, isLoading } = this.state;

    return (
      <div className="w-full h-full min-h-screen overflow-hidden bg-primary">
        <div
          style={{
            padding: "20px",
            maxWidth: "600px",
            margin: "auto",
            border: "1px solid #ccc",
          }}
        >
          <h2>⚛️ Gemini Class Component Assistant</h2>
          <div
            style={{
              height: "300px",
              overflowY: "scroll",
              border: "1px solid #eee",
              padding: "10px",
              marginBottom: "10px",
            }}
          >
            {messages.map((msg, index) => (
              <div
                key={index}
                style={{
                  marginBottom: "10px",
                  padding: "8px",
                  borderRadius: "5px",
                  backgroundColor: msg.role === "user" ? "#e6f3ff" : "#f0f0f0",
                  textAlign: msg.role === "user" ? "right" : "left",
                }}
              >
                <strong>{msg.role === "user" ? "You" : "Assistant"}:</strong>
                <p style={{ margin: 0 }}>{msg.text}</p>
              </div>
            ))}
            {isLoading && <p>Assistant is thinking...</p>}
          </div>
          <form onSubmit={this.handleSendMessage} style={{ display: "flex" }}>
            <input
              type="text"
              value={input}
              onChange={this.handleInputChange}
              placeholder="Ask me about React..."
              disabled={isLoading}
              style={{ flexGrow: 1, padding: "10px", marginRight: "10px" }}
            />
            <button type="submit" disabled={isLoading}>
              Send
            </button>
          </form>
        </div>
        <div
          className="w-56 h-56 m-auto mt-20 flip sm:w-96 sm:h-96"
          onClick={() =>
            document.getElementById("flipProfile").classList.toggle("flip")
          }
          id="flipProfile"
        >
          <div className="flip-content">
            <div className="flip-front">
              <img src={profile_animated} alt="" className="w-full" />
            </div>
            <div className="flip-back">
              <img src={profile_pic} alt="" className="w-full" />
            </div>
          </div>
        </div>
        <div className="h-full mx-4 mt-24 bg-primary sm:mt-16">
          <p className="font-mono text-sm text-center text-primary sm:text-lg md:text-xl lg:text-2xl">
            Hello World! <br></br>
            I'm Brian.<br></br>
            I'm an enthusiastic developer and an engineer<br></br>
          </p>
        </div>
        <button variant="outlined" onClick={this.handleClickOpen}>
          Slide in alert dialog
        </button>
        <div className="absolute bottom-0 w-full h-1/6" ref={this.scrollArrow}>
          <section className="absolute flex flex-col left-1/2 bottom-24 scroll-arrow">
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onSetActive={this.handleSetActive}
              className="cursor-pointer"
            >
              <span></span>
              <span></span>
              <span></span>
            </Link>
          </section>
        </div>
      </div>
    );
  }
}

export default About;
