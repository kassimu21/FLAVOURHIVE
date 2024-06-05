import { useState } from "react";
import { supabase } from "../../supabaseClient";
import "./styles.scss";
export default function Auth() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();

    setLoading(true);
    const { error } = await supabase.auth.signInWithOtp({ email });

    if (error) {
      alert(error.error_description || error.message);
    } else {
      alert("Check your email for the login link!");
    }
    setLoading(false);
  };

  return (
    <div className="flex-center">
      <div className="form_widget">
        <h1 className="header">Login</h1>
        <p className="description">Enter your Email to continue.</p>
        <form className="form-widget" onSubmit={handleLogin}>
          <div>
            <input
              className="inputField"
              type="email"
              placeholder="Your email"
              value={email}
              required={true}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <button className={"button_block"} disabled={loading}>
              {loading ? <span>Loading</span> : <span>Send login link</span>}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
