"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Toaster, toast } from "sonner";

const HomePage = () => {
  const socialLinks = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/profile.php?id=100081221286388",
    },
    {
      name: "TikTok",
      url: "https://www.tiktok.com/@mima.couturee?_t=ZM-8ugPZK2hjb5&_r=1",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/mima.sucouture?igsh=MW9rcjlyMHJuOTViNQ==",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("suschonfeld@gmail.com");
    toast.success("¡Correo copiado al portapapeles!");
  };

  return (
    <motion.div
      className="min-h-screen bg-black flex flex-col items-center justify-start pt-22 px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Toaster position="top-center" />
      <motion.div
        className="w-28 h-28 relative mb-12"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src="\Logo.svg"
          alt="Logo"
          fill
          className="object-contain"
          priority
        />
      </motion.div>

      <motion.div
        className="w-full max-w-md space-y-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {socialLinks.map((link, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              className="w-full bg-white text-black hover:bg-gray-200 transition-colors"
              asChild
            >
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="py-6 text-lg flex items-center justify-center gap-3"
              >
                {link.name}
              </a>
            </Button>
          </motion.div>
        ))}

        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            className="w-full bg-white text-black hover:bg-gray-200 transition-colors py-6 text-sm flex items-center justify-center gap-3"
            onClick={handleCopyEmail}
          >
            Gmail
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default HomePage;
