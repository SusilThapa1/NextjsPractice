"use client";
import { motion } from "framer-motion";
import { TextField, Button } from "@mui/material";

export default function Contact() {
  return (
    <section className=" w-full flex items-center justify-center ">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-5xl  p-8 md:p-12"
      >
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have a project idea, a question, or just want to say hi?  
            Fill out the form and I’ll get back to you as soon as possible.
          </p>
        </div>

        {/* Layout: Form + Info */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <form className="flex flex-col gap-5">
            <TextField
              label="Full Name"
              variant="outlined"
              fullWidth
              required
            />
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              required
            />
            <TextField
              label="Subject"
              variant="outlined"
              fullWidth
            />
            <TextField
              label="Message"
              variant="outlined"
              fullWidth
              multiline
              rows={5}
              required
            />
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.95 }}>
              <Button
                type="submit"
                variant="contained"
                size="large"
                fullWidth
                className="!bg-blue-600 hover:!bg-blue-700 !text-white !py-3 !rounded-lg"
              >
                Send Message
              </Button>
            </motion.div>
          </form>

          {/* Contact Info / Social */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-gray-700"
          >
            <div>
              <h3 className="text-xl font-semibold mb-2">📍 Address</h3>
              <p>Kathmandu, Nepal</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">📧 Email</h3>
              <p>hello@example.com</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">📞 Phone</h3>
              <p>+977-9800000000</p>
            </div>
            <div className="pt-4">
              <h3 className="text-xl font-semibold mb-4">🌐 Connect</h3>
              <div className="flex space-x-5">
                {[
                  { name: "GitHub", url: "https://github.com/", icon: "🌐" },
                  { name: "LinkedIn", url: "https://linkedin.com/", icon: "💼" },
                  { name: "Twitter", url: "https://twitter.com/", icon: "🐦" },
                ].map((link, i) => (
                  <motion.a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2 }}
                    className="text-3xl text-gray-600 hover:text-blue-600"
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
