import { a as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, b as renderSlot, d as renderComponent } from './astro/server_DrjHWHeI.mjs';
import 'kleur/colors';
import { $ as $$Image } from './_astro_assets_D3QTEfWs.mjs';
import 'clsx';

const s1 = new Proxy({"src":"/_astro/company-logo1.syO998vd.svg","width":111,"height":48,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/mac/Documents/orcaserver/aibyguamac/Positivus/src/assets/company/company-logo1.svg";
							}
							
							return target[name];
						}
					});

const s2 = new Proxy({"src":"/_astro/company-logo2.CREQfids.svg","width":126,"height":48,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/mac/Documents/orcaserver/aibyguamac/Positivus/src/assets/company/company-logo2.svg";
							}
							
							return target[name];
						}
					});

const s3 = new Proxy({"src":"/_astro/company-logo3.c2biK_9v.svg","width":147,"height":48,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/mac/Documents/orcaserver/aibyguamac/Positivus/src/assets/company/company-logo3.svg";
							}
							
							return target[name];
						}
					});

const s4 = new Proxy({"src":"/_astro/company-logo4.COtkDUvM.svg","width":129,"height":48,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/mac/Documents/orcaserver/aibyguamac/Positivus/src/assets/company/company-logo4.svg";
							}
							
							return target[name];
						}
					});

const s5 = new Proxy({"src":"/_astro/company-logo5.BbmFav3z.svg","width":127,"height":48,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/mac/Documents/orcaserver/aibyguamac/Positivus/src/assets/company/company-logo5.svg";
							}
							
							return target[name];
						}
					});

const s6 = new Proxy({"src":"/_astro/company-logo6.BTRoJjnx.svg","width":125,"height":48,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/mac/Documents/orcaserver/aibyguamac/Positivus/src/assets/company/company-logo6.svg";
							}
							
							return target[name];
						}
					});

const $$Astro$1 = createAstro("https://positivustheme.vercel.app");
const $$Section = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Section;
  const { id } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")} class="px-5 flex justify-center overflow-hidden lg:block"> <div class="w-full max-w-[1280px] mx-auto"> ${renderSlot($$result, $$slots["default"])} </div> </section>`;
}, "/Users/mac/Documents/orcaserver/aibyguamac/Positivus/src/components/sections/Section.astro", void 0);

const $$Sponsors = createComponent(($$result, $$props, $$slots) => {
  const sponsors = [
    { logo: s6, alt: "Amazon logo" },
    { logo: s5, alt: "Dribble logo" },
    { logo: s4, alt: "HubSpot logo" },
    { logo: s3, alt: "Notion logo" },
    { logo: s2, alt: "Netflix logo" },
    { logo: s1, alt: "Zoom logo" }
  ];
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "id": "sponsors" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex-row items-center"> <div class="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6"> ${sponsors.map((sponsor) => {
    return renderTemplate`<div class="p-4 grayscale transition duration-200 hover:grayscale-0"> ${renderComponent($$result2, "Image", $$Image, { "src": sponsor.logo, "class": "h-12 w-auto mx-auto", "alt": sponsor.alt, "loading": "lazy" })} </div>`;
  })} </div> </div> ` })}`;
}, "/Users/mac/Documents/orcaserver/aibyguamac/Positivus/src/components/sections/Sponsors.astro", void 0);

const $$Astro = createAstro("https://positivustheme.vercel.app");
const $$SectionTitle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SectionTitle;
  const { sectionTitle, description } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col items-center gap-10 mb-20 sm:flex-row"> <h2 class="greenhead text-center sm:text-left text-3xl sm:text-4xl">${sectionTitle}</h2> <p class="w-auto text-center sm:text-left sm:w-[580px]"> ${description} </p> </div>`;
}, "/Users/mac/Documents/orcaserver/aibyguamac/Positivus/src/components/ui/SectionTitle.astro", void 0);

export { $$SectionTitle as $, $$Section as a, $$Sponsors as b };
