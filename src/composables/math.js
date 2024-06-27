import { onMounted } from "vue";
var mathJax = null;
export function useMath() {
  if (!window.MathJax) {
    window.MathJax = {
      tex: {
        inlineMath: [
          ["$", "$"],
          ["\\(", "\\)"],
        ],
        displayMath: [
          ["$$", "$$"],
          ["\\[", "\\]"],
        ],
        processEscapes: true,
      },
    };
  }

  onMounted(() => {
    if (!mathJax) {
      mathJax = document.createElement("script");
      mathJax.src = "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js";
      document.head.appendChild(mathJax);
    } else {
      MathJax?.typeset();
    }
  });
  return {
    render: MathJax?.typeset,
  };
}
