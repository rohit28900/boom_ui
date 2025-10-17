export default function FeatureCard({ icon, title, description, color, backgroundImage }) {
  return (
    <div 
      className="bg-white rounded-xl p-8 border-2 border-orange-400 hover:border-orange-600 hover:shadow-xl hover:shadow-orange-100 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-white/90 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div
          className={`inline-flex p-3 rounded-lg ${
            color === "blue" ? "bg-blue-100 text-blue-600" : "bg-orange-100 text-orange-600"
          } mb-6`}
        >
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}