export const fadeIn = {
  initial: {
    opacity: 0,
    y: 20
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  }
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

export const slideIn = {
  initial: {
    x: -60,
    opacity: 0
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export const scaleIn = {
  initial: {
    scale: 0.8,
    opacity: 0
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.6
    }
  }
};

export const heroImageAnimation = {
  initial: {
    scale: 1.2,
    opacity: 0
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: "easeOut"
    }
  }
};

export const textReveal = {
  initial: {
    y: 50,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};