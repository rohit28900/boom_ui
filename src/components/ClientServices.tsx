// 'use client';

// import {
//   Phone,
//   Wifi,
//   Network,
//   Cable,
//   Settings,
//   Shield,
//   CheckCircle2,
//   ArrowRight,
// } from 'lucide-react';
// import { useState } from 'react';
// import Link from 'next/link';

// const DottedBackground = () => (
//   <div className="absolute inset-0 bg-[radial-gradient(#e5e5e5_1px,transparent_1px)] [background-size:20px_20px] opacity-40 pointer-events-none" />
// );

// function ServiceImage({
//   src,
//   alt,
//   onError,
// }: {
//   src: string;
//   alt: string;
//   onError: () => void;
// }) {
//   return (
//     <div className="relative h-64 overflow-hidden bg-[#f9fafb]">
//       <img
//         src={src}
//         alt={alt}
//         className="absolute inset-0 w-full h-full object-cover"
//         onError={onError}
//       />
//       <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-black/10 to-transparent" />
//     </div>
//   );
// }

// function GradientFallback({ icon }: { icon: React.ReactNode }) {
//   return (
//     <div className="relative h-64 bg-[#f9fafb] flex items-center justify-center">
//       <div className="w-20 h-20 bg-[#de6f23]/10 rounded-xl flex items-center justify-center border border-[#de6f23]/20">
//         <div className="text-[#de6f23]">{icon}</div>
//       </div>
//     </div>
//   );
// }

// export default function ClientServices() {
//   const [imageErrors, setImageErrors] = useState<Set<number>>(new Set());
//   const handleImageError = (index: number) =>
//     setImageErrors((prev) => new Set(prev).add(index));

//   const services = [
//     {
//       icon: <Phone className="w-10 h-10 text-[#0096FF]" />,
//       title: 'VoIP Cloud Telephony',
//       description:
//         'Cloud-based telephony with IVR, call recording, and analytics for seamless communication.',
//       features: ['IVR Systems', 'Call Recording', 'Analytics', 'Multi-channel Support'],
//       image: '/service/voip.png',
//     },
//     {
//       icon: <Wifi className="w-10 h-10 text-[#0096FF]" />,
//       title: 'Home Broadband & Enterprise Internet',
//       description:
//         'High-speed, reliable connectivity designed for homes and enterprises with guaranteed uptime.',
//       features: ['99.9% Uptime', 'Dedicated Bandwidth', '24/7 Support', 'Scalable Plans'],
//       image: '/service/broadband.png',
//     },
//     {
//       icon: <Network className="w-10 h-10 text-[#0096FF]" />,
//       title: 'SD-WAN Solutions',
//       description:
//         'Intelligent network routing and optimization for enterprise-grade performance and security.',
//       features: ['Centralized Control', 'Cloud Ready', 'Secure Routing', 'Cost Optimization'],
//       image: '/service/sdwan.png',
//     },
//     {
//       icon: <Cable className="w-10 h-10 text-[#0096FF]" />,
//       title: 'Internet Leased Lines',
//       description:
//         'Dedicated, symmetrical internet connections for mission-critical business applications.',
//       features: ['Low Latency', 'SLA Guaranteed', 'Symmetrical Speed', 'Enterprise Grade'],
//       image: '/service/leased-lines.png',
//     },
//     {
//       icon: <Settings className="w-10 h-10 text-[#0096FF]" />,
//       title: 'Networking Solutions',
//       description:
//         'End-to-end network architecture, cabling, monitoring, and integrated security for enterprises.',
//       features: ['LAN/WAN Setup', 'Monitoring', 'Integrated Security', 'Custom Design'],
//       image: '/service/networking.png',
//     },
//     {
//       icon: <Shield className="w-10 h-10 text-[#0096FF]" />,
//       title: 'Government & Defense Connectivity',
//       description:
//         'Secure and compliant infrastructure tailored for government and defense network needs.',
//       features: ['Military Grade', 'High Security', 'Encrypted', '24/7 Compliance'],
//       image: '/service/government.png',
//     },
//   ];

//   return (
//     <section className="max-w-[1500px] mx-auto px-6 py-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
//       {services.map((service, index) => (
//         <article
//           key={index}
//           className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-all"
//         >
//           {imageErrors.has(index) ? (
//             <GradientFallback icon={service.icon} />
//           ) : (
//             <ServiceImage
//               src={service.image}
//               alt={service.title}
//               onError={() => handleImageError(index)}
//             />
//           )}
//           <div className="p-8">
//             <div className="mb-3">{service.icon}</div>
//             <h2 className="text-2xl font-semibold text-gray-900 mb-3">{service.title}</h2>
//             <p className="text-gray-600 text-sm mb-6">{service.description}</p>
//             <ul className="grid grid-cols-2 gap-2 mb-6">
//               {service.features.map((f, i) => (
//                 <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
//                   <CheckCircle2 className="w-4 h-4 text-[#de6f23]" />
//                   {f}
//                 </li>
//               ))}
//             </ul>
//             <Link
//               href={`/services/${service.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
//               className="inline-flex items-center gap-2 text-[#0096FF] font-semibold hover:text-[#de6f23] transition-colors"
//             >
//               Learn More
//               <ArrowRight className="w-4 h-4" />
//             </Link>
//           </div>
//         </article>
//       ))}
//     </section>
//   );
// }

'use client';

import {
  Phone,
  Wifi,
  Network,
  Cable,
  Settings,
  Shield,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

const DottedBackground = () => (
  <div className="absolute inset-0 bg-[radial-gradient(#e5e5e5_1px,transparent_1px)] [background-size:20px_20px] opacity-40 pointer-events-none" />
);

function ServiceImage({
  src,
  alt,
  onError,
}: {
  src: string;
  alt: string;
  onError: () => void;
}) {
  return (
    <div className="relative h-64 overflow-hidden bg-[#f9fafb]">
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover"
        onError={onError}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-black/10 to-transparent" />
    </div>
  );
}

function GradientFallback({ icon }: { icon: React.ReactNode }) {
  return (
    <div className="relative h-64 bg-[#f9fafb] flex items-center justify-center">
      <div className="w-20 h-20 bg-[#de6f23]/10 rounded-xl flex items-center justify-center border border-[#de6f23]/20">
        <div className="text-[#de6f23]">{icon}</div>
      </div>
    </div>
  );
}

// ✅ Define a TypeScript interface for services
interface Service {
  slug: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  image: string;
}

export default function ClientServices() {
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set());
  const handleImageError = (index: number) =>
    setImageErrors((prev) => new Set(prev).add(index));

  // ✅ Add slug to each service
  const services: Service[] = [
    {
      slug: 'voip',
      icon: <Phone className="w-10 h-10 text-[#0096FF]" />,
      title: 'VoIP Cloud Telephony',
      description:
        'Cloud-based telephony with IVR, call recording, and analytics for seamless communication.',
      features: ['IVR Systems', 'Call Recording', 'Analytics', 'Multi-channel Support'],
      image: '/service/voip.png',
    },
    {
      slug: 'broadband',
      icon: <Wifi className="w-10 h-10 text-[#0096FF]" />,
      title: 'Home Broadband & Enterprise Internet',
      description:
        'High-speed, reliable connectivity designed for homes and enterprises with guaranteed uptime.',
      features: ['99.9% Uptime', 'Dedicated Bandwidth', '24/7 Support', 'Scalable Plans'],
      image: '/service/broadband.png',
    },
    {
      slug: 'sdwan',
      icon: <Network className="w-10 h-10 text-[#0096FF]" />,
      title: 'SD-WAN Solutions',
      description:
        'Intelligent network routing and optimization for enterprise-grade performance and security.',
      features: ['Centralized Control', 'Cloud Ready', 'Secure Routing', 'Cost Optimization'],
      image: '/service/sdwan.png',
    },
    {
      slug: 'leased-lines',
      icon: <Cable className="w-10 h-10 text-[#0096FF]" />,
      title: 'Internet Leased Lines',
      description:
        'Dedicated, symmetrical internet connections for mission-critical business applications.',
      features: ['Low Latency', 'SLA Guaranteed', 'Symmetrical Speed', 'Enterprise Grade'],
      image: '/service/leased-lines.png',
    },
    {
      slug: 'networking',
      icon: <Settings className="w-10 h-10 text-[#0096FF]" />,
      title: 'Networking Solutions',
      description:
        'End-to-end network architecture, cabling, monitoring, and integrated security for enterprises.',
      features: ['LAN/WAN Setup', 'Monitoring', 'Integrated Security', 'Custom Design'],
      image: '/service/networking.png',
    },
    {
      slug: 'government',
      icon: <Shield className="w-10 h-10 text-[#0096FF]" />,
      title: 'Government & Defense Connectivity',
      description:
        'Secure and compliant infrastructure tailored for government and defense network needs.',
      features: ['Military Grade', 'High Security', 'Encrypted', '24/7 Compliance'],
      image: '/service/government.png',
    },
  ];

  return (
    <section className="max-w-[1500px] mx-auto px-6 py-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {services.map((service, index) => (
        <article
          key={index}
          className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-all"
        >
          {imageErrors.has(index) ? (
            <GradientFallback icon={service.icon} />
          ) : (
            <ServiceImage
              src={service.image}
              alt={service.title}
              onError={() => handleImageError(index)}
            />
          )}
          <div className="p-8">
            <div className="mb-3">{service.icon}</div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">{service.title}</h2>
            <p className="text-gray-600 text-sm mb-6">{service.description}</p>
            <ul className="grid grid-cols-2 gap-2 mb-6">
              {service.features.map((f, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-[#de6f23]" />
                  {f}
                </li>
              ))}
            </ul>
            {/* ✅ Updated link for short URLs */}
            <Link
              href={`/services/${service.slug}`}
              className="inline-flex items-center gap-2 text-[#0096FF] font-semibold hover:text-[#de6f23] transition-colors"
            >
              Learn More
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </article>
      ))}
    </section>
  );
}

