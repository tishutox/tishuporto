"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import {
  Home,
  Instagram,
  Linkedin,
  Github,
  Music2,
  Menu,
  X,
  ScrollText,
} from "lucide-react";
import { cn } from "@/lib/utils/cn";
import Cal from "./Cal";

const SocialLink: React.FC<{
  href: string;
  icon: React.ComponentType<{
    className?: string;
    style?: React.CSSProperties;
    strokeWidth?: number;
  }>;
  label: string;
  size: number;
  strokeWidth?: number;
}> = ({ href, icon: Icon, label, size, strokeWidth = 1.8 }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="hover:opacity-80  transition-opacity"
    aria-label={label}
  >
    <Icon
      style={{ width: `${size}px`, height: `${size}px` }}
      className="flex-shrink-0"
      strokeWidth={strokeWidth}
    />
  </a>
);

const MobileSocialLink: React.FC<{
  href: string;
  icon: React.ComponentType<{
    className?: string;
    style?: React.CSSProperties;
    strokeWidth?: number;
  }>;
  label: string;
  size: number;
}> = ({ href, icon: Icon, label, size }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-4 px-6 py-4 hover:bg-gray-50 transition-colors"
    aria-label={label}
    whileHover={{ x: 4 }}
    transition={{ type: "spring", stiffness: 300, damping: 30 }}
  >
    <Icon
      style={{ width: `${size}px`, height: `${size}px` }}
      className="flex-shrink-0"
      strokeWidth={1.8}
    />
    <span className="text-lg font-medium">{label}</span>
  </motion.a>
);

const SOCIAL_LINKS = [
  {
    href: "https://github.com/yourusername",
    icon: Github,
    label: "GitHub",
    size: 23,
    strokeWidth: 1.8,
  },
  {
    href: "https://www.instagram.com/yourusername",
    icon: Instagram,
    label: "Instagram",
    size: 23,
    strokeWidth: 1.8,
  },
  {
    href: "https://www.tiktok.com/@yourusername",
    icon: Music2,
    label: "TikTok",
    size: 22,
    strokeWidth: 1.8,
  },
  {
    href: "https://yourblog.com/",
    icon: ScrollText,
    label: "Blog",
    size: 23,
    strokeWidth: 1.8,
  },
  {
    href: "https://www.linkedin.com/in/yourusername",
    icon: Linkedin,
    label: "LinkedIn",
    size: 23.5,
    strokeWidth: 1.5,
  },
] as const;

const Divider: React.FC<{ className?: string }> = ({ className }) => (
  <div className={cn("w-px h-5 bg-zinc-200 ", className)} />
);

// Animation Variants
const dropdownVariants = {
  hidden: {
    opacity: 0,
    y: -20,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
      staggerChildren: 0.05,
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    scale: 0.98,
    transition: {
      duration: 0.15,
      ease: "easeIn",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
    },
  },
};

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Desktop Header */}
      <header className="hidden sm:flex items-center justify-center fixed top-10 z-50  px-4 py-3 w-full">
        <div className="flex items-center pl-4 p-2 rounded-2xl border border-zinc-200 bg-white/80 backdrop-blur-lg   text-zinc-700 w-fit">
          {/* Home Navigation */}
          <Link
            href="/"
            onClick={handleHomeClick}
            className="hover:opacity-80 transition-opacity mx-auto flex items-center justify-center pl-2"
            aria-label="Home"
          >
            <Home size={23} />
          </Link>

          <Divider className="mx-6" />

          <div className="space-x-8 flex items-center">
            {/* Social Links */}
            {SOCIAL_LINKS.map((link) => (
              <SocialLink
                key={link.href}
                href={link.href}
                icon={link.icon}
                label={link.label}
                size={link.size}
                strokeWidth={link.strokeWidth}
              />
            ))}
          </div>

          <Divider className="mx-6" />

          {/* Call to Action */}
          <Cal />
        </div>
      </header>

      {/* Mobile Header */}
      <header className="sm:hidden sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-zinc-200 w-full">
        <div className="flex items-center justify-between px-6 py-3 max-w-full">
          <div className="flex items-center justify-between w-full  rounded-2xl  text-zinc-700">
            {/* Home Navigation */}
            <Link
              href="/"
              onClick={handleHomeClick}
              className="hover:opacity-80 transition-opacity"
              aria-label="Home"
            >
              <Home className="size-6" />
            </Link>

            {/* Hamburger Menu */}
            <motion.button
              onClick={toggleMenu}
              className="p-2 hover:opacity-80 transition-opacity"
              aria-label="Toggle menu"
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={{ rotate: isMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {isMenuOpen ? (
                  <X className="size-6" />
                ) : (
                  <Menu className="size-6" />
                )}
              </motion.div>
            </motion.button>
          </div>
        </div>
      </header>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              className="sm:hidden fixed top-[65px] left-0 right-0 bg-white/80 backdrop-blur-lg border-b border-zinc-200 shadow-lg z-40 max-w-full overflow-hidden"
              variants={dropdownVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="py-2 max-w-full">
                {SOCIAL_LINKS.map((link) => (
                  <motion.div key={link.href} variants={itemVariants}>
                    <MobileSocialLink
                      href={link.href}
                      icon={link.icon}
                      label={link.label}
                      size={link.size}
                    />
                  </motion.div>
                ))}
                <motion.div className="px-6 py-4" variants={itemVariants}>
                  <Cal />
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              className="sm:hidden fixed inset-0 bg-zinc-900 bg-opacity-20 z-30 top-[73px]"
              variants={backdropVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={closeMenu}
            />
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export { Header };
