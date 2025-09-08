// src/pages/About.jsx
import { Card, CardContent, CardMedia, Typography, Button } from "@mui/material";

export default function About() {
  return (
    <div className="min-h-screen w-full flex justify-center items-center p-6">
      <Card elevation={0} className="max-w-7xl  shadow-2xl rounded-2xl">
        {/* Profile Image */}
        <img
          src="https://mui.com/static/images/avatar/1.jpg" // replace with your image
          alt="Profile"
          className="rounded-full object-cover"
        />
        {/* Content */}
        <CardContent className="p-6 space-y-4">
          <Typography variant="h4" className="font-bold text-gray-800">
            Hello, I’m Sunlight 👋
          </Typography>

          <Typography variant="body1" className="text-gray-600 leading-relaxed">
            I’m a passionate <span className="font-semibold">MERN Stack Developer</span> {"  "} 
            who loves building modern, scalable, and user-friendly web applications.  
            With a strong interest in full-stack development, I specialize in creating 
            seamless user experiences and clean, maintainable code.
          </Typography>

          <Typography variant="body1" className="text-gray-600 leading-relaxed">
            Outside coding, I enjoy exploring new technologies, sharing knowledge, and 
            continuously improving my skills in both frontend and backend development.
          </Typography>

          {/* Skills Section */}
          <div>
            <Typography variant="h6" className="font-semibold text-gray-700 mb-2">
              Skills:
            </Typography>
            <div className="flex flex-wrap gap-2">
              {["React", "Node.js", "Express", "MongoDB", "Tailwind", "Material UI"].map(
                (skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Contact Button */}
          <div className="pt-4">
            <Button
              variant="contained"
              color="primary"
              className="!rounded-full !px-6 !py-2"
              href="mailto:yourmail@example.com"
            >
              Contact Me
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
