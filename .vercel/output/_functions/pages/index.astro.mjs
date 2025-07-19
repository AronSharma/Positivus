/* empty css                                 */
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead, e as addAttribute, l as renderScript, a as createAstro } from '../chunks/astro/server_DrjHWHeI.mjs';
import 'kleur/colors';
import { $ as $$Image } from '../chunks/_astro_assets_D3QTEfWs.mjs';
import { $ as $$Card } from '../chunks/Card_zZ4pd3Qe.mjs';
import { $ as $$SectionTitle, a as $$Section, b as $$Sponsors } from '../chunks/SectionTitle_CR8WOikf.mjs';
/* empty css                                 */
import 'clsx';
import { $ as $$MainLayout } from '../chunks/MainLayout_BliwRV_q.mjs';
export { renderers } from '../renderers.mjs';

const larrow = new Proxy({ "src": "/_astro/icon3.C2Kx7sAW.svg", "width": 21, "height": 20, "format": "svg" }, {
	get(target, name, receiver) {
		if (name === 'clone') {
			return structuredClone(target);
		}
		if (name === 'fsPath') {
			return "/Users/mac/Documents/orcaserver/aibyguamac/Positivus/src/assets/icon3.svg";
		}

		return target[name];
	}
});

const $$Cases = createComponent(($$result, $$props, $$slots) => {
	const cards = [
		{
			index: 0,
			title: "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
			link: "https://google.com"
		},
		{
			index: 1,
			title: "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
			link: "https://google.com"
		},
		{
			index: 1,
			title: "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
			link: "https://google.com"
		}
	];
	return renderTemplate`${renderComponent($$result, "Section", $$Section, { "id": "cases" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SectionTitle", $$SectionTitle, { "sectionTitle": "Case Studies", "description": "Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies" })} ${maybeRenderHead()}<div class="flex flex-col lg:flex-row justify-between rounded-[45px] p-1"> ${cards.map((card) => renderTemplate`${renderComponent($$result2, "Card", $$Card, {}, { "default": ($$result3) => renderTemplate` <div class="flex p-[60px] h-full bg-dark text-gray rounded-[45px] m-[1px]"> <div class="flex flex-col gap-5"> <p>${card.title}</p> <a${addAttribute(card.link, "href")} class="flex items-center gap-[15px]"> <span class="text-green">Case Info</span> <picture> ${renderComponent($$result3, "Image", $$Image, { "src": larrow, "alt": "Arrow pointing up right" })} </picture> </a> </div> </div> ` })}`)} </div> ` })}`;
}, "/Users/mac/Documents/orcaserver/aibyguamac/Positivus/src/components/sections/Cases.astro", void 0);

const decorForm = new Proxy({ "src": "/_astro/contact-pic.BrB0SfUf.png", "width": 692, "height": 649, "format": "png" }, {
	get(target, name, receiver) {
		if (name === 'clone') {
			return structuredClone(target);
		}
		if (name === 'fsPath') {
			return "/Users/mac/Documents/orcaserver/aibyguamac/Positivus/src/assets/pics/contact-pic.png";
		}

		return target[name];
	}
});

const $$Form = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead()}<div class="flex relative justify-start items-center p-[60px] bg-[#F3F3F3] rounded-[45px] overflow-hidden" data-astro-cid-2lkv3ujd> <form class="bg-gray sm:p-6 h-full w-full lg:max-w-lg" data-astro-cid-2lkv3ujd> <div class="flex flex-col sm:flex-row gap-[35px] sm:items-center mb-10" data-astro-cid-2lkv3ujd> <div class="flex items-center gap-[14px]" data-astro-cid-2lkv3ujd> <input type="checkbox" id="checkbox1" name="checkbox1" class="form-checkbox text-black" data-astro-cid-2lkv3ujd> <label for="checkbox1" class="text-black" data-astro-cid-2lkv3ujd>Say Hi</label> </div> <div class="flex items-center gap-[14px]" data-astro-cid-2lkv3ujd> <input type="checkbox" id="checkbox2" name="checkbox2" class="form-checkbox text-black" data-astro-cid-2lkv3ujd> <label for="checkbox2" class="flex items-center text-black" data-astro-cid-2lkv3ujd>Get a Quote</label> </div> </div> <div class="mb-4" data-astro-cid-2lkv3ujd> <label for="name" class="block text-black mb-2" data-astro-cid-2lkv3ujd>Name*</label> <input type="text" id="name" name="name" placeholder="Name" class="w-full px-[30px] py-[18px] border border-black rounded-[14px] text-black outline-none" data-astro-cid-2lkv3ujd> </div> <div class="mb-4" data-astro-cid-2lkv3ujd> <label for="email" class="block text-black mb-2" data-astro-cid-2lkv3ujd>Email*</label> <input type="email" id="email" name="email" placeholder="Email" class="w-full px-[30px] py-[18px] border border-black rounded-[14px] text-black outline-none" data-astro-cid-2lkv3ujd> </div> <div class="mb-4" data-astro-cid-2lkv3ujd> <label for="message" class="block text-black mb-2" data-astro-cid-2lkv3ujd>Message*</label> <textarea id="message" name="message" placeholder="Message" class="w-full px-[30px] py-[18px] border border-black rounded-[14px] text-black outline-none" data-astro-cid-2lkv3ujd></textarea> </div> <button type="submit" name="submit" class="btn-primary w-full" data-astro-cid-2lkv3ujd>Send</button> </form> <picture class="absolute right-[-25%] top-[2%] bottom-[2%] hidden lg:block" data-astro-cid-2lkv3ujd> ${renderComponent($$result, "Image", $$Image, { "src": decorForm, "alt": "decor", "data-astro-cid-2lkv3ujd": true })} </picture> </div>  ${renderScript($$result, "/Users/mac/Documents/orcaserver/aibyguamac/Positivus/src/components/ui/Form.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/mac/Documents/orcaserver/aibyguamac/Positivus/src/components/ui/Form.astro", void 0);

const $$Contact = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Section", $$Section, { "id": "contact" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mb-[140px] relative"> ${renderComponent($$result2, "SectionTitle", $$SectionTitle, { "sectionTitle": "Contact Us", "description": "Connect with Us: Let's Discuss Your Digital Marketing Needs" })} ${renderComponent($$result2, "Form", $$Form, {})} </div> ` })}`;
}, "/Users/mac/Documents/orcaserver/aibyguamac/Positivus/src/components/sections/Contact.astro", void 0);

const $$Astro$1 = createAstro("https://positivustheme.vercel.app");
const $$AccordionItem = createComponent(($$result, $$props, $$slots) => {
	const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
	Astro2.self = $$AccordionItem;
	const { index, title, description } = Astro2.props;
	return renderTemplate`${maybeRenderHead()}<div id="accordion__item" class="accordion__item group h-[160px] bg-[#F3F3F3] overflow-hidden w-full transition-all duration-500 mb-[30px] rounded-[45px] border border-dark shadow-[0px_5px_0px_#191a23]" data-astro-cid-kq6n5brs> <button class="accordion__toggle w-full h-[160px] flex items-center justify-between p-[60px] cursor-pointer"${addAttribute(`${title} accordion__item menu button`, "id")} aria-expanded="false"${addAttribute(`${title} accordion__item menu content`, "aria-controls")} data-astro-cid-kq6n5brs> <div class="flex items-center gap-[25px]" data-astro-cid-kq6n5brs> <span class="hidden sm:block sm:text-6xl" data-astro-cid-kq6n5brs>0${index}</span> ${title} </div> <div class="bg-gray w-[58px] h-[58px] flex justify-center items-center rounded-full border border-dark" data-astro-cid-kq6n5brs> <div class="accordion__icon h-10 w-10 transition-transform duration-300 flex justify-center items-center relative" aria-hidden="true" data-astro-cid-kq6n5brs></div> </div> </button> <div${addAttribute(`${title} accordion__item menu content`, "id")}${addAttribute(`${title} accordion__item menu button `, "aria-labelledby")} class="accordion__content px-[60px]" data-astro-cid-kq6n5brs> <div class="w-full h-[2px] bg-black" data-astro-cid-kq6n5brs></div> <p class="prose mb-4 mt-1 max-w-full pt-5 pb-[60px] transition-[height]" data-astro-cid-kq6n5brs> ${description} </p> </div> </div>  ${renderScript($$result, "/Users/mac/Documents/orcaserver/aibyguamac/Positivus/src/components/ui/AccordionItem.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/mac/Documents/orcaserver/aibyguamac/Positivus/src/components/ui/AccordionItem.astro", void 0);

const $$Accordion = createComponent(($$result, $$props, $$slots) => {
	const content = [
		{
			index: 1,
			title: "Consultation",
			description: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
		},
		{
			index: 2,
			title: "Research",
			description: "After the consultation, we will conduct thorough research to identify your target audience, competitors, and industry trends. This will help us develop a comprehensive strategy to achieve your business goals."
		},
		{
			index: 3,
			title: "Implementation",
			description: "Once the research is complete, we will begin implementing the strategy. This may include optimizing your website, creating content, and launching marketing campaigns. Our team will work diligently to ensure that all tasks are completed on time and within budget."
		},
		{
			index: 4,
			title: "Optimization",
			description: "After the initial implementation, we will continuously monitor and optimize your marketing efforts to ensure maximum results. This may involve adjusting ad campaigns, refining content, and analyzing data to identify areas for improvement."
		},
		{
			index: 5,
			title: "Reporting",
			description: "Throughout the process, we will provide regular reports on the performance of your marketing campaigns. This will allow you to track progress, measure success, and make informed decisions about future strategies."
		},
		{
			index: 6,
			title: "Improvement",
			description: "Based on the data and insights gathered from the reports, we will make recommendations for further improvement. This may involve refining existing strategies, exploring new opportunities, or adjusting tactics to better align with your business goals."
		}
	];
	return renderTemplate`${content.map((item) => {
		return renderTemplate`${renderComponent($$result, "AccordionItem", $$AccordionItem, { "index": item.index, "title": item.title, "description": item.description })}`;
	})}`;
}, "/Users/mac/Documents/orcaserver/aibyguamac/Positivus/src/components/ui/Accordion.astro", void 0);

const $$Process = createComponent(($$result, $$props, $$slots) => {
	const description = "Step-by-Step Guide to Achieving Your Business Goals";
	return renderTemplate`${renderComponent($$result, "Section", $$Section, { "id": "process" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mt-[140px]"> ${renderComponent($$result2, "SectionTitle", $$SectionTitle, { "sectionTitle": "Our Working Process", "description": description })} ${renderComponent($$result2, "Accordion", $$Accordion, {})} </div> ` })}`;
}, "/Users/mac/Documents/orcaserver/aibyguamac/Positivus/src/components/sections/Process.astro", void 0);

const propImg = new Proxy({ "src": "/_astro/proposal-pic.DC7YnBHg.png", "width": 494, "height": 395, "format": "png" }, {
	get(target, name, receiver) {
		if (name === 'clone') {
			return structuredClone(target);
		}
		if (name === 'fsPath') {
			return "/Users/mac/Documents/orcaserver/aibyguamac/Positivus/src/assets/pics/proposal-pic.png";
		}

		return target[name];
	}
});

const $$Proposal = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Section", $$Section, {}, {
		"default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Card", $$Card, {}, {
			"default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="flex bg-[#F3F3F3] rounded-[45px] p-[60px] relative mt-[123px] mb-[163px]"> <div class="w-full md:w-[40%] flex flex-col gap-[26px]"> <h2 class="text-3xl font-medium">Let's make things happen</h2> <p>
Contact us today to learn more about how our digital marketing
          services can help your business grow and succeed online.
</p> <button class="btn-primary">Get your free proposal</button> </div> <picture class="hidden md:flex absolute right-[-10%] lg:right-0 top-[-15%] h-[450px] items-center justify-center"> ${renderComponent($$result3, "Image", $$Image, { "src": propImg, "alt": "This is an illustration", "class": "hidden md:flex lg:h-full lg:w-auto" })} </picture> </div> `
		})} `
	})}`;
}, "/Users/mac/Documents/orcaserver/aibyguamac/Positivus/src/components/sections/Proposal.astro", void 0);

const linkd = new Proxy({ "src": "/_astro/profile-in.CjyVQDgO.svg", "width": 34, "height": 34, "format": "svg" }, {
	get(target, name, receiver) {
		if (name === 'clone') {
			return structuredClone(target);
		}
		if (name === 'fsPath') {
			return "/Users/mac/Documents/orcaserver/aibyguamac/Positivus/src/assets/pics/profile-in.svg";
		}

		return target[name];
	}
});

const $$Astro = createAstro("https://positivustheme.vercel.app");
const $$TeamCard = createComponent(($$result, $$props, $$slots) => {
	const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
	Astro2.self = $$TeamCard;
	const { pic, name, role, description, link } = Astro2.props;
	return renderTemplate`${renderComponent($$result, "Card", $$Card, { "isUnderline": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="p-[60px]"> <div class="flex flex-col sm:flex-row relative"> <picture>${renderComponent($$result2, "Image", $$Image, { "src": pic, "alt": name })}</picture> <div class="flex flex-col justify-end sm:ml-5"> <h3 class="text-lg font-medium">${name}</h3> <p class="text-sm font-normal">${role}</p> </div> <a${addAttribute(link, "href")} class="absolute right-0 top-0">${renderComponent($$result2, "Image", $$Image, { "src": linkd, "alt": "Linkedin Logo" })}</a> </div> <div class="w-full h-[1px] bg-black my-7"></div> <div>${description}</div> </div> ` })}`;
}, "/Users/mac/Documents/orcaserver/aibyguamac/Positivus/src/components/ui/TeamCard.astro", void 0);

const p1 = new Proxy({ "src": "/_astro/t1.DCqpUh7U.png", "width": 106, "height": 103, "format": "png" }, {
	get(target, name, receiver) {
		if (name === 'clone') {
			return structuredClone(target);
		}
		if (name === 'fsPath') {
			return "/Users/mac/Documents/orcaserver/aibyguamac/Positivus/src/assets/team/t1.png";
		}

		return target[name];
	}
});

const p2 = new Proxy({ "src": "/_astro/t2.nG-pfUKH.png", "width": 103, "height": 103, "format": "png" }, {
	get(target, name, receiver) {
		if (name === 'clone') {
			return structuredClone(target);
		}
		if (name === 'fsPath') {
			return "/Users/mac/Documents/orcaserver/aibyguamac/Positivus/src/assets/team/t2.png";
		}

		return target[name];
	}
});

const p3 = new Proxy({ "src": "/_astro/t3.CD1xqxr1.png", "width": 103, "height": 103, "format": "png" }, {
	get(target, name, receiver) {
		if (name === 'clone') {
			return structuredClone(target);
		}
		if (name === 'fsPath') {
			return "/Users/mac/Documents/orcaserver/aibyguamac/Positivus/src/assets/team/t3.png";
		}

		return target[name];
	}
});

const p4 = new Proxy({ "src": "/_astro/t4.H_8Q79jb.png", "width": 103, "height": 103, "format": "png" }, {
	get(target, name, receiver) {
		if (name === 'clone') {
			return structuredClone(target);
		}
		if (name === 'fsPath') {
			return "/Users/mac/Documents/orcaserver/aibyguamac/Positivus/src/assets/team/t4.png";
		}

		return target[name];
	}
});

const p5 = new Proxy({ "src": "/_astro/t5.hcMJufQa.png", "width": 103, "height": 103, "format": "png" }, {
	get(target, name, receiver) {
		if (name === 'clone') {
			return structuredClone(target);
		}
		if (name === 'fsPath') {
			return "/Users/mac/Documents/orcaserver/aibyguamac/Positivus/src/assets/team/t5.png";
		}

		return target[name];
	}
});

const p6 = new Proxy({ "src": "/_astro/t6.C1epwtLh.png", "width": 103, "height": 103, "format": "png" }, {
	get(target, name, receiver) {
		if (name === 'clone') {
			return structuredClone(target);
		}
		if (name === 'fsPath') {
			return "/Users/mac/Documents/orcaserver/aibyguamac/Positivus/src/assets/team/t6.png";
		}

		return target[name];
	}
});

const $$Team = createComponent(($$result, $$props, $$slots) => {
	const description = "Meet the skilled and experienced team behind our successful digital marketing strategies";
	const team = [
		{
			pic: p1,
			name: "John Smith",
			role: "CEO and Founder",
			description: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
			link: "https://linkedin.com"
		},
		{
			pic: p2,
			name: "Jane Doe",
			role: "Director of Operations",
			description: "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
			link: "https://linkedin.com"
		},
		{
			pic: p3,
			name: "Michael Brown",
			role: "Senior SEO Specialist",
			description: "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
			link: "https://linkedin.com"
		},
		{
			pic: p4,
			name: "Emily Johnson",
			role: "PPC Manager",
			description: "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
			link: "https://linkedin.com"
		},
		{
			pic: p5,
			name: "Brian Williams",
			role: "Social Media Specialist",
			description: "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
			link: "https://linkedin.com"
		},
		{
			pic: p6,
			name: "Sarah Kim",
			role: "Content Creator",
			description: "2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries",
			link: "https://linkedin.com"
		}
	];
	return renderTemplate`${renderComponent($$result, "Section", $$Section, { "id": "about" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mt-[140px]"> ${renderComponent($$result2, "SectionTitle", $$SectionTitle, { "sectionTitle": "Team", "description": description })} <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-2 gap-10"> ${team.map((member, index) => renderTemplate`${renderComponent($$result2, "TeamCard", $$TeamCard, { "key": index, "pic": member.pic, "name": member.name, "role": member.role, "description": member.description, "link": member.link })}`)} </div> <div class="flex justify-end mt-10"> <button class="btn-primary">See all team</button> </div> </div> ` })}`;
}, "/Users/mac/Documents/orcaserver/aibyguamac/Positivus/src/components/sections/Team.astro", void 0);

const Testimonials = [
	{
		index: 1,
		name: "John Smith",
		role: "Marketing dierector at XYZ",
		comment: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."
	},
	{
		index: 2,
		name: "Jane Doe",
		role: "CEO at ABC",
		comment: "We chose Positivus to help us with our SEO and PPC campaigns and have been very impressed with their results. They are knowledgeable, responsive, and truly care about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."
	},
	{
		index: 3,
		name: "Alice Johnson",
		role: "Owner at 123",
		comment: "I recently started working with Positivus and have been very impressed with their professionalism and expertise. They have helped me increase my online visibility and generate more leads for my business. I highly recommend Positivus to anyone looking to improve their online marketing strategy."
	},
	{
		index: 4,
		name: "Bob Brown",
		role: "Dierector at XYZ",
		comment: "Positivus has been a great partner for our company. They are knowledgeable, responsive, and truly care about the success of our business. We have seen a significant increase in website traffic and leads as a result of their efforts. I highly recommend Positivus to any company looking to grow their online presence."
	},
	{
		index: 5,
		name: "Gupta Patel",
		role: "Content creator",
		comment: "I have been working with Positivus for the past year and have been very impressed with their professionalism and expertise. They have helped me increase my online visibility and generate more leads for my business. I highly recommend Positivus to anyone looking to improve their online marketing strategy."
	},
	{
		index: 6,
		name: "Sara Johnson",
		role: "Freelancer",
		comment: "Positivus made a huge difference in our online presence. They are knowledgeable, responsive, and truly care about the success of our business. We have seen a significant increase in website traffic and leads as a result of their efforts. I highly recommend Positivus to any company looking to grow their online presence."
	}
];

const $$SwiperSlider = createComponent(($$result, $$props, $$slots) => {
	const processedTestimonials = Testimonials.map((item, index, array) => ({
		...item,
		index: index + 1,
		length: array.length
	}));
	return renderTemplate`${maybeRenderHead()}<div id="ProjectSlider" class="swiper mt-10"${addAttribute({
		"--swiper-pagination-color": "var(--green)",
		"--swiper-pagination-bullet-inactive-color": "#fff",
		"--swiper-pagination-bullet-inactive-opacity": "1",
		"--swiper-pagination-bullet-size": "19px",
		"--swiper-pagination-bullet-horizontal-gap": "10px"
	}, "style")} data-astro-cid-klye6o2m> <div class="swiper-wrapper mt-[84px] mb-[124px]" data-cursor="swipe" data-astro-cid-klye6o2m> ${processedTestimonials.map((item) => renderTemplate`<div class="swiper-slide text-gray flex flex-col" role="group"${addAttribute(`${item.index} / ${item.length}`, "aria-label")} data-astro-cid-klye6o2m> <div class="flex flex-col justify-center items-center py-[48px] px-6 sm:px-[52px]" data-astro-cid-klye6o2m> <p class="bubble" data-astro-cid-klye6o2m>
"${item.comment}"
</p> </div> <div class="w-full px-10 sm:px-20 " data-astro-cid-klye6o2m> <div class="text-green font-medium" data-astro-cid-klye6o2m>${item.name}</div> <div data-astro-cid-klye6o2m>${item.role}</div> </div> </div>`)} </div> <div class="flex justify-around lg:justify-center mb-[68px] lg:gap-[189px]" data-astro-cid-klye6o2m> <div class="swiper-button-prev w-7 h-7 sm:w-10 sm:h-10" data-astro-cid-klye6o2m> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-astro-cid-klye6o2m><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--> <path fill="#ffffff" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" data-astro-cid-klye6o2m></path></svg> </div> <div class="swiper-pagination" data-astro-cid-klye6o2m></div> <div class="swiper-button-next w-7 h-7 sm:w-10 sm:h-10 rotate-180" data-astro-cid-klye6o2m> <svg xmlns="http://www.w3.org/2000/svg " viewBox="0 0 448 512" data-astro-cid-klye6o2m> <path fill="#ffffff" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" data-astro-cid-klye6o2m></path></svg> </div> </div> </div> ${renderScript($$result, "/Users/mac/Documents/orcaserver/aibyguamac/Positivus/src/components/ui/SwiperSlider.astro?astro&type=script&index=0&lang.ts")} `;
}, "/Users/mac/Documents/orcaserver/aibyguamac/Positivus/src/components/ui/SwiperSlider.astro", void 0);

const $$Testimonials = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Section", $$Section, { "id": "testimonials" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mt-20"> ${renderComponent($$result2, "SectionTitle", $$SectionTitle, { "sectionTitle": "Testimonials", "description": "Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services" })} <div class="rounded-[45px] bg-dark mb-[150px] text-gray"> ${renderComponent($$result2, "SwiperSlider", $$SwiperSlider, {})} </div> </div> ` })}`;
}, "/Users/mac/Documents/orcaserver/aibyguamac/Positivus/src/components/sections/Testimonials.astro", void 0);

const $$AnimatedHero = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead()}<section class="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-gray-50 to-green" data-astro-cid-xlwlabbh> <!-- Animated Background Elements --> <div class="absolute inset-0 overflow-hidden" data-astro-cid-xlwlabbh> <div class="floating-shape absolute top-20 left-10 w-64 h-64 bg-green opacity-20 rounded-full blur-3xl animate-float" data-astro-cid-xlwlabbh></div> <div class="floating-shape absolute bottom-20 right-10 w-48 h-48 bg-yellow-300 opacity-30 rounded-full blur-2xl animate-float-delayed" data-astro-cid-xlwlabbh></div> <div class="floating-shape absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-300 opacity-10 rounded-full blur-3xl animate-pulse" data-astro-cid-xlwlabbh></div> </div> <!-- Grid Pattern --> <div class="absolute inset-0 opacity-5" data-astro-cid-xlwlabbh> <div class="grid-pattern" data-astro-cid-xlwlabbh></div> </div> <div class="container mx-auto px-6 relative z-10" data-astro-cid-xlwlabbh> <div class="grid lg:grid-cols-2 gap-12 items-center" data-astro-cid-xlwlabbh> <!-- Content Side --> <div class="text-center lg:text-left" data-astro-cid-xlwlabbh> <!-- Animated Badge --> <div class="inline-flex items-center space-x-2 bg-black text-white px-4 py-2 rounded-full mb-6 animate-fade-in-up" data-astro-cid-xlwlabbh> <div class="w-2 h-2 bg-green rounded-full animate-pulse" data-astro-cid-xlwlabbh></div> <span class="text-sm font-medium" data-astro-cid-xlwlabbh>AI-Powered Digital Marketing</span> </div> <!-- Main Heading with Stagger Animation --> <h1 class="text-5xl md:text-7xl font-bold leading-tight mb-6 stagger-animation" data-astro-cid-xlwlabbh> <span class="block animate-fade-in-up" style="animation-delay: 0.2s;" data-astro-cid-xlwlabbh>Navigating the</span> <span class="block animate-fade-in-up text-stroke" style="animation-delay: 0.4s;" data-astro-cid-xlwlabbh>digital</span> <span class="block animate-fade-in-up bg-green text-black px-4 py-2 rounded-lg inline-block mt-2" style="animation-delay: 0.6s;" data-astro-cid-xlwlabbh>
landscape
</span> <span class="block animate-fade-in-up mt-2" style="animation-delay: 0.8s;" data-astro-cid-xlwlabbh>for success</span> </h1> <!-- Subtitle --> <p class="text-xl md:text-2xl text-gray-600 mb-8 max-w-xl animate-fade-in-up" style="animation-delay: 1s;" data-astro-cid-xlwlabbh>
Our AI-powered digital marketing agency helps businesses thrive in the online world with data-driven strategies and cutting-edge technology.
</p> <!-- CTA Buttons --> <div class="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style="animation-delay: 1.2s;" data-astro-cid-xlwlabbh> <button class="btn-primary group relative overflow-hidden" data-astro-cid-xlwlabbh> <span class="relative z-10" data-astro-cid-xlwlabbh>Book a Live AI Demo</span> <div class="absolute inset-0 bg-green transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" data-astro-cid-xlwlabbh></div> </button> <button class="btn-secondary group" data-astro-cid-xlwlabbh> <span data-astro-cid-xlwlabbh>Watch Success Stories</span> <svg class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-xlwlabbh> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h1m4 0h1m6-3a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-xlwlabbh></path> </svg> </button> </div> <!-- Stats Row --> <div class="grid grid-cols-3 gap-6 mt-12 animate-fade-in-up" style="animation-delay: 1.4s;" data-astro-cid-xlwlabbh> <div class="text-center" data-astro-cid-xlwlabbh> <div class="text-3xl font-bold text-black counter" data-target="500" data-astro-cid-xlwlabbh>0</div> <div class="text-sm text-gray-600" data-astro-cid-xlwlabbh>AI Campaigns</div> </div> <div class="text-center" data-astro-cid-xlwlabbh> <div class="text-3xl font-bold text-black counter" data-target="98" data-astro-cid-xlwlabbh>0</div> <div class="text-sm text-gray-600" data-astro-cid-xlwlabbh>Success Rate %</div> </div> <div class="text-center" data-astro-cid-xlwlabbh> <div class="text-3xl font-bold text-black counter" data-target="24" data-astro-cid-xlwlabbh>0</div> <div class="text-sm text-gray-600" data-astro-cid-xlwlabbh>Hour Response</div> </div> </div> </div> <!-- Visual Side --> <div class="relative animate-fade-in-left" style="animation-delay: 0.8s;" data-astro-cid-xlwlabbh> <!-- Main Illustration Container --> <div class="relative" data-astro-cid-xlwlabbh> <!-- Hero Image with Floating Cards --> <div class="relative z-10" data-astro-cid-xlwlabbh> <div class="bg-gradient-to-br from-green to-yellow-300 rounded-3xl p-8 shadow-2xl" data-astro-cid-xlwlabbh> <!-- AI Dashboard Mockup --> <div class="bg-white rounded-2xl p-6 shadow-lg" data-astro-cid-xlwlabbh> <div class="flex items-center justify-between mb-4" data-astro-cid-xlwlabbh> <h3 class="font-bold text-lg" data-astro-cid-xlwlabbh>AI Analytics Dashboard</h3> <div class="flex space-x-2" data-astro-cid-xlwlabbh> <div class="w-3 h-3 bg-green rounded-full animate-pulse" data-astro-cid-xlwlabbh></div> <div class="w-3 h-3 bg-yellow-400 rounded-full animate-pulse" style="animation-delay: 0.2s;" data-astro-cid-xlwlabbh></div> <div class="w-3 h-3 bg-red-400 rounded-full animate-pulse" style="animation-delay: 0.4s;" data-astro-cid-xlwlabbh></div> </div> </div> <!-- Chart Visualization --> <div class="space-y-3" data-astro-cid-xlwlabbh> <div class="flex items-end space-x-2 h-20" data-astro-cid-xlwlabbh> <div class="bg-green w-4 animate-grow-up" style="height: 60%; animation-delay: 1.5s;" data-astro-cid-xlwlabbh></div> <div class="bg-green w-4 animate-grow-up" style="height: 80%; animation-delay: 1.7s;" data-astro-cid-xlwlabbh></div> <div class="bg-green w-4 animate-grow-up" style="height: 40%; animation-delay: 1.9s;" data-astro-cid-xlwlabbh></div> <div class="bg-green w-4 animate-grow-up" style="height: 90%; animation-delay: 2.1s;" data-astro-cid-xlwlabbh></div> <div class="bg-green w-4 animate-grow-up" style="height: 70%; animation-delay: 2.3s;" data-astro-cid-xlwlabbh></div> </div> <div class="flex justify-between text-xs text-gray-500" data-astro-cid-xlwlabbh> <span data-astro-cid-xlwlabbh>Jan</span> <span data-astro-cid-xlwlabbh>Feb</span> <span data-astro-cid-xlwlabbh>Mar</span> <span data-astro-cid-xlwlabbh>Apr</span> <span data-astro-cid-xlwlabbh>May</span> </div> </div> </div> </div> </div> <!-- Floating Cards --> <div class="absolute -top-4 -left-4 bg-white rounded-xl p-4 shadow-lg animate-float" style="animation-delay: 2s;" data-astro-cid-xlwlabbh> <div class="flex items-center space-x-2" data-astro-cid-xlwlabbh> <div class="w-3 h-3 bg-green rounded-full" data-astro-cid-xlwlabbh></div> <span class="text-sm font-medium" data-astro-cid-xlwlabbh>Campaign Active</span> </div> </div> <div class="absolute -bottom-4 -right-4 bg-black text-white rounded-xl p-4 shadow-lg animate-float-delayed" style="animation-delay: 2.5s;" data-astro-cid-xlwlabbh> <div class="text-center" data-astro-cid-xlwlabbh> <div class="text-2xl font-bold text-green" data-astro-cid-xlwlabbh>+147%</div> <div class="text-xs" data-astro-cid-xlwlabbh>ROI Increase</div> </div> </div> <div class="absolute top-1/2 -right-8 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl p-3 shadow-lg animate-bounce-gentle" style="animation-delay: 3s;" data-astro-cid-xlwlabbh> <div class="text-center" data-astro-cid-xlwlabbh> <div class="text-lg font-bold" data-astro-cid-xlwlabbh>AI</div> <div class="text-xs" data-astro-cid-xlwlabbh>Powered</div> </div> </div> </div> </div> </div> </div> <!-- Scroll Indicator --> <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce" data-astro-cid-xlwlabbh> <div class="flex flex-col items-center text-gray-500" data-astro-cid-xlwlabbh> <span class="text-xs mb-2" data-astro-cid-xlwlabbh>Scroll to explore</span> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-xlwlabbh> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" data-astro-cid-xlwlabbh></path> </svg> </div> </div> </section>  ${renderScript($$result, "/Users/mac/Documents/orcaserver/aibyguamac/Positivus/src/components/enhanced/AnimatedHero.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/mac/Documents/orcaserver/aibyguamac/Positivus/src/components/enhanced/AnimatedHero.astro", void 0);

const $$InteractiveShowcase = createComponent(async ($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead()}<section class="py-20 bg-black text-white relative overflow-hidden" data-astro-cid-tpkp4wcy> <!-- Animated Background --> <div class="absolute inset-0" data-astro-cid-tpkp4wcy> <div class="mesh-gradient" data-astro-cid-tpkp4wcy></div> <div class="floating-particles" data-astro-cid-tpkp4wcy> <div class="particle" data-astro-cid-tpkp4wcy></div> <div class="particle" data-astro-cid-tpkp4wcy></div> <div class="particle" data-astro-cid-tpkp4wcy></div> <div class="particle" data-astro-cid-tpkp4wcy></div> <div class="particle" data-astro-cid-tpkp4wcy></div> </div> </div> <div class="container mx-auto px-6 relative z-10" data-astro-cid-tpkp4wcy> <!-- Section Header --> <div class="text-center mb-16" data-astro-cid-tpkp4wcy> <h2 class="text-5xl md:text-6xl font-bold mb-6" data-astro-cid-tpkp4wcy>
Experience the <span class="text-green" data-astro-cid-tpkp4wcy>Future</span> <br data-astro-cid-tpkp4wcy>of Digital Marketing
</h2> <p class="text-xl text-gray-300 max-w-3xl mx-auto" data-astro-cid-tpkp4wcy>
Interact with our AI-powered tools and see real-time results. Every demo is live and powered by cutting-edge AI technology.
</p> </div> <!-- Interactive Grid --> <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16" data-astro-cid-tpkp4wcy> <!-- AI Content Generator --> <div class="interactive-card bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-green transition-all duration-300 group" data-astro-cid-tpkp4wcy> <div class="flex items-center justify-between mb-4" data-astro-cid-tpkp4wcy> <h3 class="text-xl font-bold" data-astro-cid-tpkp4wcy>AI Content Generator</h3> <div class="w-3 h-3 bg-green rounded-full animate-pulse" data-astro-cid-tpkp4wcy></div> </div> <div class="content-demo" data-astro-cid-tpkp4wcy> <input type="text" placeholder="Enter your topic..." class="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 mb-4 focus:border-green focus:outline-none" id="content-input" data-astro-cid-tpkp4wcy> <button class="generate-content-btn w-full bg-green text-black py-2 rounded-lg hover:bg-white transition-colors" data-astro-cid-tpkp4wcy>
Generate Content ✨
</button> <div id="content-output" class="mt-4 p-4 bg-gray-800 rounded-lg min-h-20 text-sm text-gray-300" data-astro-cid-tpkp4wcy>
Click generate to see AI magic happen...
</div> </div> </div> <!-- Real-time Analytics --> <div class="interactive-card bg-gradient-to-br from-purple-900 to-purple-800 rounded-2xl p-6 border border-purple-600 hover:border-green transition-all duration-300 group" data-astro-cid-tpkp4wcy> <div class="flex items-center justify-between mb-4" data-astro-cid-tpkp4wcy> <h3 class="text-xl font-bold" data-astro-cid-tpkp4wcy>Live Analytics</h3> <div class="flex space-x-1" data-astro-cid-tpkp4wcy> <div class="w-2 h-2 bg-green rounded-full animate-ping" data-astro-cid-tpkp4wcy></div> <div class="w-2 h-2 bg-yellow-400 rounded-full animate-ping" style="animation-delay: 0.2s;" data-astro-cid-tpkp4wcy></div> <div class="w-2 h-2 bg-red-400 rounded-full animate-ping" style="animation-delay: 0.4s;" data-astro-cid-tpkp4wcy></div> </div> </div> <div class="analytics-demo" data-astro-cid-tpkp4wcy> <div class="grid grid-cols-2 gap-4 mb-4" data-astro-cid-tpkp4wcy> <div class="metric" data-astro-cid-tpkp4wcy> <div class="text-2xl font-bold text-green" id="visitors-count" data-astro-cid-tpkp4wcy>1,247</div> <div class="text-xs text-gray-400" data-astro-cid-tpkp4wcy>Visitors Today</div> </div> <div class="metric" data-astro-cid-tpkp4wcy> <div class="text-2xl font-bold text-yellow-400" id="conversion-rate" data-astro-cid-tpkp4wcy>12.4%</div> <div class="text-xs text-gray-400" data-astro-cid-tpkp4wcy>Conversion Rate</div> </div> </div> <div class="chart-container bg-gray-800 rounded-lg p-3" data-astro-cid-tpkp4wcy> <div class="flex items-end space-x-1 h-16" data-astro-cid-tpkp4wcy> <div class="live-bar bg-green opacity-60" style="height: 40%;" data-astro-cid-tpkp4wcy></div> <div class="live-bar bg-green opacity-70" style="height: 60%;" data-astro-cid-tpkp4wcy></div> <div class="live-bar bg-green opacity-80" style="height: 30%;" data-astro-cid-tpkp4wcy></div> <div class="live-bar bg-green opacity-90" style="height: 80%;" data-astro-cid-tpkp4wcy></div> <div class="live-bar bg-green" style="height: 50%;" data-astro-cid-tpkp4wcy></div> </div> </div> </div> </div> <!-- AI Strategy Assistant --> <div class="interactive-card bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-6 border border-blue-600 hover:border-green transition-all duration-300 group md:col-span-2 lg:col-span-1" data-astro-cid-tpkp4wcy> <div class="flex items-center justify-between mb-4" data-astro-cid-tpkp4wcy> <h3 class="text-xl font-bold" data-astro-cid-tpkp4wcy>Strategy Assistant</h3> <div class="bg-green text-black px-2 py-1 rounded text-xs font-bold" data-astro-cid-tpkp4wcy>LIVE AI</div> </div> <div class="strategy-demo" data-astro-cid-tpkp4wcy> <select id="industry-select" class="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 mb-4 focus:border-green focus:outline-none" data-astro-cid-tpkp4wcy> <option value="" data-astro-cid-tpkp4wcy>Select your industry...</option> <option value="ecommerce" data-astro-cid-tpkp4wcy>E-commerce</option> <option value="saas" data-astro-cid-tpkp4wcy>SaaS</option> <option value="healthcare" data-astro-cid-tpkp4wcy>Healthcare</option> <option value="education" data-astro-cid-tpkp4wcy>Education</option> <option value="finance" data-astro-cid-tpkp4wcy>Finance</option> </select> <button class="get-strategy-btn w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-green hover:text-black transition-colors" data-astro-cid-tpkp4wcy>
Get AI Strategy 🧠
</button> <div id="strategy-output" class="mt-4 p-4 bg-gray-800 rounded-lg min-h-20 text-sm text-gray-300" data-astro-cid-tpkp4wcy>
Select an industry to get personalized AI recommendations...
</div> </div> </div> </div> <!-- Live Demo CTA --> <div class="text-center" data-astro-cid-tpkp4wcy> <div class="bg-gradient-to-r from-green to-yellow-400 rounded-2xl p-8 inline-block" data-astro-cid-tpkp4wcy> <h3 class="text-2xl font-bold text-black mb-4" data-astro-cid-tpkp4wcy>Ready for a Personalized Demo?</h3> <p class="text-black mb-6 max-w-md" data-astro-cid-tpkp4wcy>
See how our AI can transform your specific business challenges into growth opportunities.
</p> <button class="bg-black text-white px-8 py-4 rounded-xl font-bold hover:bg-gray-800 transition-colors" data-astro-cid-tpkp4wcy>
Book Your Live AI Demo 🚀
</button> </div> </div> </div> </section>  ${renderScript($$result, "/Users/mac/Documents/orcaserver/aibyguamac/Positivus/src/components/enhanced/InteractiveShowcase.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/mac/Documents/orcaserver/aibyguamac/Positivus/src/components/enhanced/InteractiveShowcase.astro", void 0);

const $$ImageGenerator = createComponent(async ($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead()}<section class="py-20 bg-gradient-to-br from-green via-yellow-200 to-green"> <div class="container mx-auto px-6"> <div class="text-center mb-12"> <h2 class="text-4xl md:text-5xl font-bold mb-4 text-black">
✨ AI-Powered <span class="bg-black text-white px-3 py-1 rounded-lg">Visual Creation</span> </h2> <p class="text-xl text-gray-700 max-w-2xl mx-auto">
Watch our AI create stunning marketing visuals in real-time. Just describe what you need!
</p> </div> <div class="max-w-4xl mx-auto"> <div class="bg-white rounded-2xl shadow-2xl overflow-hidden"> <!-- Generator Interface --> <div class="p-8"> <div class="flex flex-col md:flex-row gap-8"> <!-- Input Section --> <div class="flex-1"> <h3 class="text-2xl font-bold mb-4 text-black">Describe Your Vision</h3> <div class="space-y-4"> <textarea id="image-prompt" placeholder="e.g., A modern digital marketing team collaborating in a sleek office with holographic data visualizations..." class="w-full h-32 p-4 border-2 border-gray-200 rounded-xl focus:border-green focus:outline-none resize-none"></textarea> <div class="flex flex-wrap gap-2"> <button class="prompt-suggestion bg-gray-100 hover:bg-green text-black px-3 py-1 rounded-lg text-sm transition-colors" data-prompt="Modern tech startup office with diverse team">
Tech Startup
</button> <button class="prompt-suggestion bg-gray-100 hover:bg-green text-black px-3 py-1 rounded-lg text-sm transition-colors" data-prompt="Futuristic digital marketing dashboard with AI analytics">
AI Dashboard
</button> <button class="prompt-suggestion bg-gray-100 hover:bg-green text-black px-3 py-1 rounded-lg text-sm transition-colors" data-prompt="Creative agency brainstorming session with colorful mood boards">
Creative Agency
</button> <button class="prompt-suggestion bg-gray-100 hover:bg-green text-black px-3 py-1 rounded-lg text-sm transition-colors" data-prompt="Social media content creation studio with ring lights and cameras">
Content Studio
</button> </div> <button id="generate-btn" class="w-full bg-black text-white py-4 rounded-xl hover:bg-green hover:text-black font-medium transition-all duration-300 transform hover:scale-105">
🎨 Generate AI Visual
</button> </div> </div> <!-- Preview Section --> <div class="flex-1"> <h3 class="text-2xl font-bold mb-4 text-black">AI Creation</h3> <div id="image-preview" class="relative"> <!-- Default State --> <div id="default-state" class="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl h-64 flex items-center justify-center"> <div class="text-center text-gray-500"> <svg class="w-16 h-16 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path> </svg> <p>Your AI-generated visual will appear here</p> </div> </div> <!-- Loading State --> <div id="loading-state" class="hidden bg-gradient-to-br from-green to-yellow-200 rounded-xl h-64 flex items-center justify-center"> <div class="text-center text-black"> <div class="animate-spin w-12 h-12 border-4 border-black border-t-transparent rounded-full mx-auto mb-4"></div> <p class="font-medium">AI is creating your visual...</p> <p class="text-sm opacity-70 mt-2">This usually takes 5-10 seconds</p> </div> </div> <!-- Result State --> <div id="result-state" class="hidden"> <div class="bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl h-64 p-6 text-white relative overflow-hidden"> <div class="absolute inset-0 bg-black bg-opacity-20 rounded-xl"></div> <div class="relative z-10"> <h4 class="font-bold text-xl mb-2">AI-Generated Concept</h4> <p id="ai-description" class="text-sm leading-relaxed opacity-90"> <!-- AI description will be inserted here --> </p> </div> <div class="absolute bottom-4 right-4 bg-white bg-opacity-20 rounded-lg px-3 py-1"> <span class="text-xs font-medium">✨ AI Enhanced</span> </div> </div> <div class="mt-4 flex gap-2"> <button class="flex-1 bg-green text-black py-2 rounded-lg hover:bg-black hover:text-white transition-colors">
💾 Save Concept
</button> <button id="regenerate-btn" class="flex-1 bg-gray-200 text-black py-2 rounded-lg hover:bg-gray-300 transition-colors">
🔄 Regenerate
</button> </div> </div> </div> </div> </div> </div> <!-- Stats Bar --> <div class="bg-gray-50 px-8 py-4 border-t"> <div class="flex justify-center space-x-8 text-sm"> <div class="text-center"> <div class="font-bold text-green text-2xl">50K+</div> <div class="text-gray-600">Visuals Generated</div> </div> <div class="text-center"> <div class="font-bold text-green text-2xl">98%</div> <div class="text-gray-600">Client Satisfaction</div> </div> <div class="text-center"> <div class="font-bold text-green text-2xl">5s</div> <div class="text-gray-600">Average Generation</div> </div> </div> </div> </div> </div> </div> </section> ${renderScript($$result, "/Users/mac/Documents/orcaserver/aibyguamac/Positivus/src/components/ai/ImageGenerator.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/mac/Documents/orcaserver/aibyguamac/Positivus/src/components/ai/ImageGenerator.astro", void 0);

const $$AIChat = createComponent(async ($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead()}<div id="ai-chat" class="fixed bottom-6 right-6 z-50" data-astro-cid-5vb7p6wr> <!-- Chat Toggle Button --> <button id="chat-toggle" class="bg-green hover:bg-black hover:text-white text-black rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110" data-astro-cid-5vb7p6wr> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-5vb7p6wr> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" data-astro-cid-5vb7p6wr></path> </svg> </button> <!-- Chat Window --> <div id="chat-window" class="hidden absolute bottom-16 right-0 w-80 h-96 bg-white rounded-xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden" data-astro-cid-5vb7p6wr> <!-- Chat Header --> <div class="bg-gradient-to-r from-green to-yellow-400 p-4 text-black" data-astro-cid-5vb7p6wr> <div class="flex items-center justify-between" data-astro-cid-5vb7p6wr> <div class="flex items-center space-x-2" data-astro-cid-5vb7p6wr> <div class="w-3 h-3 bg-black rounded-full animate-pulse" data-astro-cid-5vb7p6wr></div> <h3 class="font-medium" data-astro-cid-5vb7p6wr>AI Marketing Assistant</h3> </div> <button id="chat-close" class="hover:bg-black hover:text-white rounded p-1 transition-colors" data-astro-cid-5vb7p6wr> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-5vb7p6wr> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-astro-cid-5vb7p6wr></path> </svg> </button> </div> </div> <!-- Chat Messages --> <div id="chat-messages" class="flex-1 p-4 overflow-y-auto space-y-4" data-astro-cid-5vb7p6wr> <div class="ai-message" data-astro-cid-5vb7p6wr> <div class="bg-gray-100 rounded-lg p-3 max-w-xs" data-astro-cid-5vb7p6wr> <p class="text-sm" data-astro-cid-5vb7p6wr>👋 Hi! I'm your AI marketing assistant. How can I help you grow your business today?</p> </div> </div> </div> <!-- Chat Input --> <div class="p-4 border-t border-gray-200" data-astro-cid-5vb7p6wr> <div class="flex space-x-2" data-astro-cid-5vb7p6wr> <input id="chat-input" type="text" placeholder="Ask about marketing strategies..." class="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-green" data-astro-cid-5vb7p6wr> <button id="chat-send" class="bg-green hover:bg-black hover:text-white text-black px-4 py-2 rounded-lg transition-colors" data-astro-cid-5vb7p6wr> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-5vb7p6wr> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" data-astro-cid-5vb7p6wr></path> </svg> </button> </div> </div> </div> </div> ${renderScript($$result, "/Users/mac/Documents/orcaserver/aibyguamac/Positivus/src/components/ai/AIChat.astro?astro&type=script&index=0&lang.ts")} `;
}, "/Users/mac/Documents/orcaserver/aibyguamac/Positivus/src/components/ai/AIChat.astro", void 0);

const $$ModernServices = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead()}<section class="py-20 bg-gradient-to-b from-white to-gray-50" data-astro-cid-rmjpjhff> <div class="container mx-auto px-6" data-astro-cid-rmjpjhff> <!-- Section Header --> <div class="text-center mb-16" data-astro-cid-rmjpjhff> <h2 class="text-4xl md:text-5xl font-bold mb-6" data-astro-cid-rmjpjhff> <span class="whitehead" data-astro-cid-rmjpjhff>AI-Powered</span> Services That
<br data-astro-cid-rmjpjhff>Drive <span class="greenhead" data-astro-cid-rmjpjhff>Real Results</span> </h2> <p class="text-xl text-gray-600 max-w-3xl mx-auto" data-astro-cid-rmjpjhff>
Our cutting-edge AI technology transforms traditional marketing into precision-driven campaigns that adapt, learn, and optimize in real-time.
</p> </div> <!-- Services Grid --> <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16" data-astro-cid-rmjpjhff> <!-- AI Content Creation --> <div class="service-card group" data-astro-cid-rmjpjhff> <div class="bg-gradient-to-br from-green to-yellow-300 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105" data-astro-cid-rmjpjhff> <div class="flex items-center justify-between mb-4" data-astro-cid-rmjpjhff> <div class="w-12 h-12 bg-black rounded-xl flex items-center justify-center" data-astro-cid-rmjpjhff> <svg class="w-6 h-6 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-rmjpjhff> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" data-astro-cid-rmjpjhff></path> </svg> </div> <div class="bg-black text-green px-3 py-1 rounded-full text-xs font-bold" data-astro-cid-rmjpjhff>AI POWERED</div> </div> <h3 class="text-2xl font-bold text-black mb-3" data-astro-cid-rmjpjhff>Smart Content Creation</h3> <p class="text-gray-700 mb-4" data-astro-cid-rmjpjhff>AI generates personalized content that resonates with your audience, from social posts to email campaigns.</p> <div class="flex items-center space-x-4 text-sm" data-astro-cid-rmjpjhff> <div class="flex items-center space-x-1" data-astro-cid-rmjpjhff> <div class="w-2 h-2 bg-green rounded-full animate-pulse" data-astro-cid-rmjpjhff></div> <span data-astro-cid-rmjpjhff>Real-time Generation</span> </div> <div class="flex items-center space-x-1" data-astro-cid-rmjpjhff> <div class="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" data-astro-cid-rmjpjhff></div> <span data-astro-cid-rmjpjhff>Brand Consistent</span> </div> </div> </div> </div> <!-- Predictive Analytics --> <div class="service-card group" data-astro-cid-rmjpjhff> <div class="bg-gradient-to-br from-purple-500 to-pink-500 text-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105" data-astro-cid-rmjpjhff> <div class="flex items-center justify-between mb-4" data-astro-cid-rmjpjhff> <div class="w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center" data-astro-cid-rmjpjhff> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-rmjpjhff> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" data-astro-cid-rmjpjhff></path> </svg> </div> <div class="bg-white text-purple-600 px-3 py-1 rounded-full text-xs font-bold" data-astro-cid-rmjpjhff>PREDICTIVE</div> </div> <h3 class="text-2xl font-bold mb-3" data-astro-cid-rmjpjhff>Future-Ready Analytics</h3> <p class="text-purple-100 mb-4" data-astro-cid-rmjpjhff>Predict market trends, customer behavior, and campaign performance before they happen.</p> <div class="mini-chart bg-white bg-opacity-20 rounded-lg p-3 mt-4" data-astro-cid-rmjpjhff> <div class="flex items-end space-x-1 h-8" data-astro-cid-rmjpjhff> <div class="bg-white w-2 rounded-sm animate-grow" style="height: 40%;" data-astro-cid-rmjpjhff></div> <div class="bg-white w-2 rounded-sm animate-grow" style="height: 60%; animation-delay: 0.2s;" data-astro-cid-rmjpjhff></div> <div class="bg-white w-2 rounded-sm animate-grow" style="height: 30%; animation-delay: 0.4s;" data-astro-cid-rmjpjhff></div> <div class="bg-white w-2 rounded-sm animate-grow" style="height: 80%; animation-delay: 0.6s;" data-astro-cid-rmjpjhff></div> <div class="bg-white w-2 rounded-sm animate-grow" style="height: 50%; animation-delay: 0.8s;" data-astro-cid-rmjpjhff></div> </div> <div class="text-xs text-purple-200 mt-2" data-astro-cid-rmjpjhff>Live prediction model</div> </div> </div> </div> <!-- Automated Optimization --> <div class="service-card group" data-astro-cid-rmjpjhff> <div class="bg-gradient-to-br from-blue-600 to-cyan-500 text-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105" data-astro-cid-rmjpjhff> <div class="flex items-center justify-between mb-4" data-astro-cid-rmjpjhff> <div class="w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center" data-astro-cid-rmjpjhff> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-rmjpjhff> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" data-astro-cid-rmjpjhff></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" data-astro-cid-rmjpjhff></path> </svg> </div> <div class="bg-white text-blue-600 px-3 py-1 rounded-full text-xs font-bold" data-astro-cid-rmjpjhff>AUTO</div> </div> <h3 class="text-2xl font-bold mb-3" data-astro-cid-rmjpjhff>Self-Optimizing Campaigns</h3> <p class="text-blue-100 mb-4" data-astro-cid-rmjpjhff>AI continuously adjusts your campaigns for maximum ROI without manual intervention.</p> <div class="automation-demo bg-white bg-opacity-20 rounded-lg p-3 mt-4" data-astro-cid-rmjpjhff> <div class="flex items-center justify-between mb-2" data-astro-cid-rmjpjhff> <span class="text-xs" data-astro-cid-rmjpjhff>Optimization Rate</span> <span class="text-xs font-bold" data-astro-cid-rmjpjhff>247%</span> </div> <div class="bg-white bg-opacity-30 rounded-full h-2" data-astro-cid-rmjpjhff> <div class="bg-white h-2 rounded-full animate-progress" style="width: 87%;" data-astro-cid-rmjpjhff></div> </div> </div> </div> </div> <!-- Smart Targeting --> <div class="service-card group" data-astro-cid-rmjpjhff> <div class="bg-gradient-to-br from-orange-500 to-red-500 text-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105" data-astro-cid-rmjpjhff> <div class="flex items-center justify-between mb-4" data-astro-cid-rmjpjhff> <div class="w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center" data-astro-cid-rmjpjhff> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-rmjpjhff> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" data-astro-cid-rmjpjhff></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" data-astro-cid-rmjpjhff></path> </svg> </div> <div class="bg-white text-orange-600 px-3 py-1 rounded-full text-xs font-bold" data-astro-cid-rmjpjhff>PRECISION</div> </div> <h3 class="text-2xl font-bold mb-3" data-astro-cid-rmjpjhff>Hyper-Smart Targeting</h3> <p class="text-orange-100 mb-4" data-astro-cid-rmjpjhff>Find and reach your perfect customers with AI-driven audience discovery and segmentation.</p> <div class="targeting-visual mt-4" data-astro-cid-rmjpjhff> <div class="flex justify-center space-x-2" data-astro-cid-rmjpjhff> <div class="w-8 h-8 bg-white bg-opacity-30 rounded-full animate-ping" data-astro-cid-rmjpjhff></div> <div class="w-6 h-6 bg-white bg-opacity-50 rounded-full animate-ping" style="animation-delay: 0.5s;" data-astro-cid-rmjpjhff></div> <div class="w-4 h-4 bg-white rounded-full animate-ping" style="animation-delay: 1s;" data-astro-cid-rmjpjhff></div> </div> <div class="text-xs text-center text-orange-200 mt-2" data-astro-cid-rmjpjhff>Targeting 47,329 prospects</div> </div> </div> </div> <!-- Conversational AI --> <div class="service-card group" data-astro-cid-rmjpjhff> <div class="bg-gradient-to-br from-emerald-500 to-teal-500 text-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105" data-astro-cid-rmjpjhff> <div class="flex items-center justify-between mb-4" data-astro-cid-rmjpjhff> <div class="w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center" data-astro-cid-rmjpjhff> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-rmjpjhff> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" data-astro-cid-rmjpjhff></path> </svg> </div> <div class="bg-white text-emerald-600 px-3 py-1 rounded-full text-xs font-bold" data-astro-cid-rmjpjhff>24/7</div> </div> <h3 class="text-2xl font-bold mb-3" data-astro-cid-rmjpjhff>AI Customer Engagement</h3> <p class="text-emerald-100 mb-4" data-astro-cid-rmjpjhff>Intelligent chatbots that understand context, emotion, and intent for natural conversations.</p> <div class="chat-preview bg-white bg-opacity-20 rounded-lg p-3 mt-4" data-astro-cid-rmjpjhff> <div class="flex items-center space-x-2 mb-2" data-astro-cid-rmjpjhff> <div class="w-2 h-2 bg-white rounded-full animate-bounce" data-astro-cid-rmjpjhff></div> <div class="w-2 h-2 bg-white rounded-full animate-bounce" style="animation-delay: 0.2s;" data-astro-cid-rmjpjhff></div> <div class="w-2 h-2 bg-white rounded-full animate-bounce" style="animation-delay: 0.4s;" data-astro-cid-rmjpjhff></div> </div> <div class="text-xs text-emerald-200" data-astro-cid-rmjpjhff>AI is typing a response...</div> </div> </div> </div> <!-- Performance Intelligence --> <div class="service-card group" data-astro-cid-rmjpjhff> <div class="bg-gradient-to-br from-indigo-600 to-purple-600 text-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105" data-astro-cid-rmjpjhff> <div class="flex items-center justify-between mb-4" data-astro-cid-rmjpjhff> <div class="w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center" data-astro-cid-rmjpjhff> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-rmjpjhff> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" data-astro-cid-rmjpjhff></path> </svg> </div> <div class="bg-white text-indigo-600 px-3 py-1 rounded-full text-xs font-bold" data-astro-cid-rmjpjhff>INSIGHT</div> </div> <h3 class="text-2xl font-bold mb-3" data-astro-cid-rmjpjhff>Deep Performance Intelligence</h3> <p class="text-indigo-100 mb-4" data-astro-cid-rmjpjhff>Get actionable insights and recommendations powered by machine learning algorithms.</p> <div class="insights-demo bg-white bg-opacity-20 rounded-lg p-3 mt-4" data-astro-cid-rmjpjhff> <div class="flex justify-between items-center" data-astro-cid-rmjpjhff> <span class="text-xs" data-astro-cid-rmjpjhff>ROI Forecast</span> <span class="text-xs font-bold text-green-300" data-astro-cid-rmjpjhff>+312%</span> </div> <div class="mt-1 text-xs text-indigo-200" data-astro-cid-rmjpjhff>↗ Trending upward</div> </div> </div> </div> </div> <!-- CTA Section --> <div class="text-center" data-astro-cid-rmjpjhff> <div class="bg-black text-white rounded-2xl p-8 max-w-2xl mx-auto" data-astro-cid-rmjpjhff> <h3 class="text-2xl font-bold mb-4" data-astro-cid-rmjpjhff>Ready to Experience AI-Powered Marketing?</h3> <p class="text-gray-300 mb-6" data-astro-cid-rmjpjhff>
Join 10,000+ businesses already using our AI to achieve unprecedented growth.
</p> <button class="bg-green text-black px-8 py-4 rounded-xl font-bold hover:bg-white transition-colors transform hover:scale-105" data-astro-cid-rmjpjhff>
Start Your AI Journey 🚀
</button> </div> </div> </div> </section>  ${renderScript($$result, "/Users/mac/Documents/orcaserver/aibyguamac/Positivus/src/components/enhanced/ModernServices.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/mac/Documents/orcaserver/aibyguamac/Positivus/src/components/enhanced/ModernServices.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Positivus - AI-Powered Digital Marketing Agency", "description": "Experience the future of digital marketing with our AI-powered agency. Get real-time analytics, automated content generation, and data-driven strategies that deliver exceptional results." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "AnimatedHero", $$AnimatedHero, {})} ${renderComponent($$result2, "Sponsors", $$Sponsors, {})} ${renderComponent($$result2, "ModernServices", $$ModernServices, {})} ${renderComponent($$result2, "InteractiveShowcase", $$InteractiveShowcase, {})} ${renderComponent($$result2, "ImageGenerator", $$ImageGenerator, {})} ${renderComponent($$result2, "Proposal", $$Proposal, {})} ${renderComponent($$result2, "Cases", $$Cases, {})} ${renderComponent($$result2, "Process", $$Process, {})} ${renderComponent($$result2, "Team", $$Team, {})} ${renderComponent($$result2, "Testimonials", $$Testimonials, {})} ${renderComponent($$result2, "Contact", $$Contact, {})} ${renderComponent($$result2, "AIChat", $$AIChat, {})} ` })}`;
}, "/Users/mac/Documents/orcaserver/aibyguamac/Positivus/src/pages/index.astro", void 0);

const $$file = "/Users/mac/Documents/orcaserver/aibyguamac/Positivus/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
