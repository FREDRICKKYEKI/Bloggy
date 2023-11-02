export const routes = {
  home: "/",
  blog: "/blog/:id",
  blogs: "/blogs",
  login: "/auth", //require auth
  admin: "/admin", //require auth
  edit: "/admin/edit/:id", //require auth
  write_new: "/admin/write/new", //require auth
};

// styles utils
export const styles = {
  justifyCenter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

export const themeColors = {
  brand: "#009688",
};

export const heroText = {
  introTextOne: `Welcome to "Life's Canvas," a realm where the palette of existence
            is explored in all its vibrant splendor. I am Kelvin, your guide
            through the labyrinth of creativity, self-discovery, and the
            profound art of living. Join me as we unravel the intricate tapestry
            of life, stroke by stroke, color by color, and share in the wondrous
            stories, adventures, and insights that make this journey truly
            extraordinary. Together, we'll paint the canvas of life with our
            unique experiences, creating a masterpiece of existence that's both
            personal and universal. So, grab your brushes and let's embark on
  this artistic voyage through the wonderful chaos of life.`,
  introTextTwo: `Welcome to my world, to my room, but it's not really mine when you
            occupy the middle of it, is it?`,
};

export const mdStr = `# This is a H1  \n## This is a H2  \n###### This is a H6`;
