
export const ANIMATION_STYLES = `
/* Animation specific styles */
@keyframes slide-in {
    from { transform: translateX(-20px); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
}
.anim-slide-in {
    animation: slide-in 0.5s ease-out forwards;
}

@keyframes fade-in-up {
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}
.anim-fade-in-up {
  animation: fade-in-up 0.6s ease-out forwards;
  opacity: 0;
}

@keyframes scale-in {
  from { transform: scale(0.9); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}
.anim-scale-in {
  animation: scale-in 0.5s ease-out forwards;
  opacity: 0;
}

@keyframes highlight-emerald {
  0%, 100% { background-color: transparent; }
  50% { background-color: rgba(16, 185, 129, 0.3); } /* emerald-500 with 30% opacity */
}
.anim-highlight-emerald {
  animation: highlight-emerald 1.5s ease-in-out forwards;
}

.attribute-container {
  display: inline-block;
  opacity: 0;
}
@keyframes slide-in-from-top {
  from { transform: translateY(-100%); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}
.anim-slide-in-from-top {
  animation: slide-in-from-top 0.6s ease-out forwards;
}
`;
