// import Image from "next/image";
// import jhubLogo from "../public/jhubafrica_logo.jpg";

// const COLUMNS = [
//   {
//     title: "About JHUB Africa",
//     links: [
//       { label: "Our Mission", href: "/about/mission" },
//       { label: "The Team", href: "/about/team" },
//       { label: "Research & Innovation", href: "/research" },
//       { label: "Partners", href: "/partners" },
//       { label: "Contact Us", href: "/contact" },
//     ],
//   },
//   {
//     title: "API & Developers",
//     links: [
//       { label: "API Documentation", href: "/docs" },
//       { label: "Quick Start Guide", href: "/docs/quickstart" },
//       { label: "API Reference", href: "/docs/reference" },
//       { label: "Authentication", href: "/docs/auth" },
//       { label: "Rate Limits", href: "/docs/rate-limits" },
//       { label: "Status Page", href: "/status" },
//     ],
//   },
// ];

// export default function Footer() {
//   return (
//     <footer className="border-t border-line bg-[#2a2c1f] pb-8 pt-14">
//       <div className="wrap mx-auto max-w-wrap px-5">
//         <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-[2fr_1.5fr_1.5fr_1.2fr]">
//           {/* Logo & Description */}
//           <div>
//             <div className="mb-3.5 flex items-center gap-3">
//               <div className="relative h-14 w-14 overflow-hidden rounded-lg bg-white">
//                 <Image
//                   src={jhubLogo}
//                   alt="JHUB Africa Logo"
//                   fill
//                   className="object-contain p-1"
//                 />
//               </div>
//               <div>
//                 <div className="font-display text-xl font-semibold text-white">
//                   JHUB Africa
//                 </div>
//                 <div className="text-[0.6rem] uppercase tracking-wider text-[#9a9c8a]">
//                   Innovations for Transformation
//                 </div>
//               </div>
//             </div>
//             <p className="max-w-[34ch] text-[0.85rem] leading-relaxed text-[#c8c9b8]">
//               JHUB Africa is an innovation hub at Jomo Kenyatta University of
//               Agriculture and Technology (JKUAT) focused on AgriTech, climate
//               resilience, and sustainable development in East Africa.
//             </p>
//           </div>

//           {/* About JHUB Africa */}
//           <div>
//             <div className="mb-3.5 text-[0.7rem] font-semibold uppercase tracking-widest text-[#9a9c8a]">
//               About JHUB Africa
//             </div>
//             <ul className="flex flex-col gap-2">
//               {COLUMNS[0].links.map((link) => (
//                 <li key={link.label}>
//                   <a
//                     href={link.href}
//                     className="text-[0.85rem] text-[#c8c9b8] transition-colors hover:text-accent"
//                   >
//                     {link.label}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* API & Developers */}
//           <div>
//             <div className="mb-3.5 text-[0.7rem] font-semibold uppercase tracking-widest text-[#9a9c8a]">
//               API & Developers
//             </div>
//             <ul className="flex flex-col gap-2">
//               {COLUMNS[1].links.map((link) => (
//                 <li key={link.label}>
//                   <a
//                     href={link.href}
//                     className="text-[0.85rem] text-[#c8c9b8] transition-colors hover:text-accent"
//                   >
//                     {link.label}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Connect with JHUB */}
//           <div>
//             <div className="mb-3.5 text-[0.7rem] font-semibold uppercase tracking-widest text-[#9a9c8a]">
//               Connect with JHUB
//             </div>
//             <ul className="flex flex-col gap-2.5">
//               <li>
//                 <a
//                   href="mailto:info@jhubafrica.com"
//                   className="flex items-center gap-2.5 text-[0.85rem] text-[#c8c9b8] transition-colors hover:text-accent"
//                 >
//                   <span className="text-base text-[#c8c9b8]">✉</span>
//                   info@jhubafrica.com
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="https://github.com/jhub-africa"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center gap-2.5 text-[0.85rem] text-[#c8c9b8] transition-colors hover:text-accent"
//                 >
//                   <span className="text-base text-[#c8c9b8]">⌨</span>
//                   GitHub
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="https://linkedin.com/company/jhub-africa"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center gap-2.5 text-[0.85rem] text-[#c8c9b8] transition-colors hover:text-accent"
//                 >
//                   <span className="text-base text-[#c8c9b8]">🔗</span>
//                   LinkedIn
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="https://twitter.com/jhubafrica"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center gap-2.5 text-[0.85rem] text-[#c8c9b8] transition-colors hover:text-accent"
//                 >
//                   <span className="text-base text-[#c8c9b8]">X</span>
//                   (Twitter)
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="https://youtube.com/@jhubafrica"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center gap-2.5 text-[0.85rem] text-[#c8c9b8] transition-colors hover:text-accent"
//                 >
//                   <span className="text-base text-[#c8c9b8]">▶</span>
//                   YouTube
//                 </a>
//               </li>
//               <li className="mt-1 border-t border-[#4a4c40] pt-2.5 text-[0.78rem] text-[#9a9c8a]">
//                 <span className="block">JHUB Africa, JKUAT</span>
//                 <span className="block">Juja, Kenya</span>
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="mt-8 flex flex-col items-start justify-between gap-3 border-t border-[#4a4c40] pt-6 md:flex-row md:items-center">
//           <span className="text-[0.7rem] text-[#9a9c8a]">
//             © {new Date().getFullYear()} JHUB Africa Weather API. All rights
//             reserved.
//           </span>
//           <div className="flex flex-wrap items-center gap-3 text-[0.7rem]">
//             <a
//               href="/privacy"
//               className="text-[#9a9c8a] transition-colors hover:text-white"
//             >
//               Privacy Policy
//             </a>
//             <span className="text-[#4a4c40]">•</span>
//             <a
//               href="/terms"
//               className="text-[#9a9c8a] transition-colors hover:text-white"
//             >
//               Terms of Service
//             </a>
//             <span className="text-[#4a4c40]">•</span>
//             <span className="text-[#9a9c8a]">Built by JHUB Africa</span>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

import Image from "next/image";
import jhubLogo from "../public/jhubafrica_logo.jpg";

const COLUMNS = [
  {
    title: "About JHUB",
    links: [
      {
        label: "About JHUB",
        href: "https://jhubafrica.com/about-jhub/",
      },
      {
        label: "Innovations",
        href: "https://jhubafrica.com/innovations/",
      },
      {
        label: "Programs",
        href: "https://jhubafrica.com/programs-events/",
      },
      {
        label: "Get Involved",
        href: "https://jhubafrica.com/get-involved/",
      },
      {
        label: "News & Updates",
        href: "https://jhubafrica.com/news/",
      },
    ],
  },
  {
    title: "Resources",
    links: [
      {
        label: "Official Website",
        href: "https://jhubafrica.com/",
      },
      {
        label: "JKUAT",
        href: "https://www.jkuat.ac.ke",
      },
      {
        label: "Research",
        href: "https://jhubafrica.com/innovations/",
      },
      {
        label: "Contact",
        href: "https://jhubafrica.com/contact-us/",
      },
      {
        label: "News",
        href: "https://jhubafrica.com/news/",
      },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-[#2a2c1f] pb-8 pt-14">
      <div className="wrap mx-auto max-w-wrap px-5">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-[3fr_1fr_1fr_1.3fr]">
          {/* Logo & About */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="relative h-14 w-14 overflow-hidden rounded-lg bg-white">
                <Image
                  src={jhubLogo}
                  alt="JHUB Africa Logo"
                  fill
                  className="object-contain p-1"
                />
              </div>

              <div>
                <h3 className="font-display text-xl font-semibold text-white">
                  JHUB Africa
                </h3>
                <p className="text-[0.65rem] uppercase tracking-[0.25em] text-[#9a9c8a]">
                  Innovation • Research • Entrepreneurship
                </p>
              </div>
            </div>

            <p className="max-w-[52ch] text-[0.87rem] leading-7 text-[#c8c9b8]">
              JHUB Africa is the innovation and entrepreneurship hub of Jomo
              Kenyatta University of Agriculture and Technology (JKUAT). It
              empowers students, researchers, startups, and industry partners
              through research commercialization, startup incubation, digital
              innovation, capacity building, and strategic partnerships to
              create technology-driven solutions for sustainable development
              across Africa.
            </p>
          </div>

          {/* Navigation */}
          {COLUMNS.map((column) => (
            <div key={column.title}>
              <h4 className="mb-4 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[#9a9c8a]">
                {column.title}
              </h4>

              <ul className="space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={
                        link.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        link.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="text-[0.88rem] text-[#c8c9b8] transition-colors hover:text-accent"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[#9a9c8a]">
              Contact
            </h4>

            <ul className="space-y-3 text-[0.88rem] text-[#c8c9b8]">
              <li>
                <a
                  href="mailto:info.jhub@jkuat.ac.ke"
                  className="transition-colors hover:text-accent"
                >
                  info.jhub@jkuat.ac.ke
                </a>
              </li>

              <li>
                <a
                  href="tel:+25467521814"
                  className="transition-colors hover:text-accent"
                >
                  +254 (67) 52181 Ext. 2814
                </a>
              </li>

              <li>
                JHUB Africa
                <br />
                Jomo Kenyatta University of Agriculture and Technology
                <br />
                Juja, Kiambu County
                <br />
                Kenya
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-[#47493d] pt-6 md:flex-row md:items-center">
          <p className="text-[0.75rem] text-[#9a9c8a]">
            © {new Date().getFullYear()} JHUB Africa Weather API. All rights
            reserved.
          </p>

          <div className="flex flex-wrap items-center gap-3 text-[0.75rem]">
            <a
              href="/privacy"
              className="text-[#9a9c8a] transition-colors hover:text-white"
            >
              Privacy Policy
            </a>

            <span className="text-[#55584b]">•</span>

            <a
              href="/terms"
              className="text-[#9a9c8a] transition-colors hover:text-white"
            >
              Terms of Service
            </a>

            <span className="text-[#55584b]">•</span>

            <span className="text-[#9a9c8a]">
              Powered by JHUB Africa • JKUAT
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
