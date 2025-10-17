export default function LogoLoader({ logoSrc, size = 50 }) {
  return (
    <div
      className="animate-spin inline-block"
      style={{ width: size, height: size }}
    >
      <img src={logoSrc} alt="Loading..." className="w-full h-full object-contain" />
    </div>
  );
}
