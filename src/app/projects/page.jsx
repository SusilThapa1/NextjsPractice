"use client";

import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { motion } from "framer-motion";

// Example project list (replace with your real data)
const projects = [
  {
    title: "Project One",
    description: "Modern landing page built with React & Tailwind",
    image: "/proj.png",
    link: "https://example.com/project-one",
    technologies: ["React", "Tailwind", "Next.js"],
  },
  {
    title: "Project Two",
    description: "E-commerce platform using MERN stack",
    image: "https://thapasusil.com.np/assets/proj6-BIfi8j3A.png",
    link: "https://example.com/project-two",
    technologies: ["MongoDB", "Express", "React", "Node.js"],
  },
  // Add more...
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 md:px-12">
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Projects
      </motion.h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2, duration: 0.6 }}
          >
            <Card className="rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              {project.image && (
                <CardMedia
                  component="img"
                  height="180"
                  image={project.image}
                  alt={project.title}
                  className="rounded-t-xl object-cover"
                />
              )}
              <CardContent className="p-6">
                <Typography variant="h6" className="font-semibold mb-2">
                  {project.title}
                </Typography>
                <Typography variant="body2" className="text-gray-600 mb-4">
                  {project.description}
                </Typography>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Button
                  variant="contained"
                  color="primary"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="!rounded-full !text-sm"
                >
                  View Project
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
