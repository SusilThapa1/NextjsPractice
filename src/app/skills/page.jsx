"use client"
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";

const skills = [
  { name: "React", level: 90, color: "bg-blue-500" },
  { name: "Node.js", level: 85, color: "bg-green-500" },
  { name: "Express.js", level: 80, color: "bg-gray-700" },
  { name: "MongoDB", level: 85, color: "bg-green-700" },
  { name: "Tailwind CSS", level: 95, color: "bg-teal-500" },
  { name: "Material UI", level: 88, color: "bg-purple-500" },
  { name: "JavaScript", level: 92, color: "bg-yellow-400" },
];

export default function Skills() {
  return (
    <div className="  w-full  flex flex-col justify-center items-center p-6">
      {/* Title */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-gray-800 mb-10"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Skills  
      </motion.h1>

      {/* Skills */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8   w-full">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.15, duration: 0.5 }}
          >
            <Card className="shadow-xl rounded-2xl overflow-hidden">
              <CardContent className="p-6">
                <Typography variant="h6" className="font-semibold text-gray-700 mb-3">
                  {skill.name}
                </Typography>

                <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                  <motion.div
                    className={`h-4 rounded-full ${skill.color}`}
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                  />
                </div>

                <Typography variant="body2" className="text-gray-600 mt-2 font-medium">
                  {skill.level}%
                </Typography>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
