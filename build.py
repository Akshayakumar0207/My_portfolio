import html, re
E = html.escape
L = dict(gh="https://github.com/Akshayakumar0207", li="https://www.linkedin.com/in/akshaya-kumar-74a439300",
         ig="https://www.instagram.com/itz_akshayakumar", mail="akshayakumarcse02@gmail.com", tel="+918870160044", tel_show="+91 88701 60044",
         loc="Salem, Tamil Nadu, India", cv="/assets/resumes/Akshaya-Kumar-Fresher-Python-Full-Stack-Developer-Resume.pdf")
NAME = "Akshaya Kumar"
IMG = "/assets/images/"

from projects_data import projects
services = [
 ("Frontend Development", ["React.js","JavaScript","HTML & CSS","Figma"]),
 ("Backend Engineering", ["Python","FastAPI","Django","Node.js"]),
 ("AI / GenAI", ["Machine Learning","Gen AI","Prompt Engineering","Gemini"]),
 ("Mobile, Data & Cloud", ["Flutter","Firebase","MongoDB","AWS"]),
]
experience = [
 dict(role="Python Development Intern", org="Besant Technologies", when="Jan – Feb 2025", mode="Online", cert="intern-besant.jpg", tech=["Python","Pandas","Tkinter","Machine Learning"],
      pts=["Developed automation scripts for data processing and analysis","Built web scrapers and data collection tools using Python libraries","Created interactive dashboards using Tkinter and data visualization libraries","Implemented machine learning models for predictive analysis"]),
 dict(role="Java Intern", org="Stack Queue Educational Institution", when="May – Jul 2024", mode="Offline", cert="intern-stackqueue.jpg", tech=["Java","OOP","Data Structures"],
      pts=["Worked on Java OOP projects and practical exercises","Implemented data structures and algorithms for project tasks","Collaborated with mentors for code reviews and improvements"]),
 dict(role="Full Stack Development Intern", org="NoviTech R&D", when="Jan – Feb 2024", mode="Online", cert="intern-novitech.jpg", tech=["React","Node.js","MongoDB","REST API","Git"],
      pts=["Developed responsive web applications using React and Node.js","Implemented RESTful APIs with authentication and authorization","Collaborated with the design team on UI components","Participated in code reviews"]),
 dict(role="Flutter Workshop Participant", org="Gateway Solutions", when="Aug 2023", mode="Offline", cert="intern-flutter.jpg", tech=["Flutter","Dart","Firebase"],
      pts=["Built complete mobile applications from scratch using Flutter","Learned state management patterns and best practices","Implemented Firebase integration for backend services"]),
 dict(role="Freelance · Full Stack Web Developer", org="Unity Foundation Salem (NGO)", when="2026", mode="Completed", cert=None, tech=["React.js","Python","REST APIs","Database Design"],
      pts=["Developed a full-stack web application for an NGO focused on community development and social welfare","Streamlined operations and improved digital presence"], link=("Visit website","https://unity-foundation-salem-website.vercel.app")),
]
education = [("B.E. Computer Science & Engineering","Mahendra Institute of Technology, Namakkal","2022 – 2026","CGPA 8.6"),
             ("Higher Secondary","Govt. Girls Model School, Salem","2020 – 2022","83%"),
             ("SSLC","Govt. Girls Model School, Salem","2018 – 2020","78%")]
certs = [("Data Structures & Algorithms","Infosys","2024","badge-dsa"),("Google Python Course","Kaggle","2024","badge-python"),("Full Stack Development","NoviTech R&D","2024","badge-novitech"),
         ("Core Java","Stack Queue Institution","2024","badge-corejava"),("Advanced Java Programming","NPTEL (IIT Kharagpur)","2024","badge-nptel"),("AWS Cloud Architect","Amazon Web Services","2025","aws")]
awards = ["Smart India Hackathon · 2024","Best Technical Presentation · 2024","TANCAM National Level Hackathon · 2024","Tech Symposium – Outstanding Contributor · 2023"]
stack = ["HTML5","CSS3","JavaScript","React","Python","FastAPI","Django","Flask","Node.js","React Native","Flutter","Firebase","MySQL","MongoDB","PostgreSQL","Docker","AWS","Git","Figma","Supabase","Vercel"]

PILL = "text-uppercase text-white tw-text-sm fw-medium position-relative z-1 hover-bg-main-two-600 hover-border-main-two-600 hover-text-heading tw-transition-3"
MENU = ["Home","About","Skills","Projects","Experience","Contact"]
MENU_ID = ["home","about","skills","projects","experience","contact"]
menu_li = "\n".join(f'<li><a{" class=\"color-active\"" if i==0 else ""} href="#{MENU_ID[i]}">{m}</a></li>' for i,m in enumerate(MENU))
SOC = "tw-w-13 tw-h-13 lh-1 d-inline-flex justify-content-center align-items-center text-heading tw-text-xl tw-rounded-md"
FSOC = "tw-w-11 tw-h-101 lh-1 d-inline-flex align-items-center justify-content-center tw-rounded-lg tw-text-xl text-heading hover-bg-main-600 hover-text-heading"

def pill_ul(items):
    lis = "\n".join(f'<li><a class="{PILL}" href="#skills">{E(x)}</a></li>' for x in items)
    return f'<ul class="d-flex tw-gap-205 flex-wrap">\n{lis}\n</ul>'

svc = ""
for i,(t,items) in enumerate(services):
    side = "" if i%2==0 else " ms-auto"; aos = "fade-right" if i%2==0 else "fade-left"
    svc += f'''<div class="service-three-single{side}" data-aos="{aos}" data-aos-delay="{200+i*100}" data-aos-duration="2000">
<div class="service-three-item d-flex justify-content-between align-items-center">
<div class="service-three-content d-flex tw-gap-14">
<div><span class="service-three-number text-white tw-text-xl d-inline-flex align-items-center tw-gap-3 lh-1 tw-mt-5 tw-transition-3">0{i+1}
<img alt="arrow" class="tw-transition-3" src="{IMG}icons/service-three-arrow.svg"></span></div>
<div><div><h2 class="service-three-title tw-text-15 text-white tw-mb-4"><a href="#skills">{E(t)}</a></h2></div>
<div class="portfolio-list portfolio-two-list">{pill_ul(items)}</div></div>
</div>
<div class="service-three-thumb"><a href="#skills"><img alt="{E(t)}" src="{IMG}thumbs/service-thumb{i+1}.png"></a></div>
</div></div>
'''

n = len(projects)
cards = ""; details = ""
def sec(title, inner):
    return f'<section class="sb-project-details-section"><div class="sb-project-details-heading"><h3>{title}</h3><div class="sb-project-details-copy">{inner}</div></div></section>\n'
for i,p in enumerate(projects):
    lk = "".join(f'<a href="{u}" target="_blank" rel="noopener noreferrer">{E(l)} <i class="ph ph-arrow-up-right"></i></a>' for l,u in p['links'])
    cards += f'''<article class="sb-project-card" data-project-id="{p['id']}">
<div class="sb-project-card-media" data-project-details-trigger="{p['id']}" role="button" tabindex="0">
<img src="{IMG}projects/{p['card']}" alt="{E(p['kick'])} {E(p['title'])}">
<span class="sb-project-index">0{i+1} / 0{n}</span>
<span class="sb-project-corner">{E(p['corner'])}</span>
</div>
<div class="sb-project-card-copy">
<div class="sb-project-card-copy-main">
<span class="sb-project-kicker">{E(p['kick'])}</span>
<h3>{E(p['title'])}</h3>
<p>{E(p['sum'])}</p>
</div>
<div class="sb-project-links">
<a href="#" data-project-details-trigger="{p['id']}">See details <i class="ph ph-arrow-up-right"></i></a>
{lk}
</div>
</div>
</article>
'''
    body = sec("What I built", "".join(f"<p>{E(x)}</p>" for x in p['built']))
    if p.get('features'): body += sec("Core features", '<ul class="sb-project-details-list">'+"".join(f"<li>{E(x)}</li>" for x in p['features'])+'</ul>')
    if p.get('workflow'): body += sec("Workflow", '<ul class="sb-project-details-list">'+"".join(f"<li><strong>{E(a)}:</strong> {E(b)}</li>" for a,b in p['workflow'])+'</ul>')
    if p.get('arch'): body += sec(E(p['arch_title']), '<div class="sb-project-details-architecture">'+"".join(f"<div><small>{E(a)}</small><strong>{E(b)}</strong></div>" for a,b in p['arch'])+'</div>')
    if p.get('decisions'): body += sec("Technical decisions", "".join(f"<p>{E(x)}</p>" for x in p['decisions']))
    body += sec("Tech stack", '<div class="sb-project-details-tech">'+"".join(f"<span>{E(t)}</span>" for t in p['tech'])+'</div>')
    shots = "".join(f'<figure class="sb-project-details-shot"><img src="{IMG}projects/{f}" alt="{E(p["kick"])} – {E(c)}" loading="lazy" decoding="async"><figcaption>{E(c)}</figcaption></figure>' for f,c in p['gallery'])
    body += sec("Project images", f'<div class="sb-project-details-gallery">{shots}</div>')
    details += f'''<article data-project-detail="{p['id']}" hidden>
<header class="sb-project-details-hero">
<span class="sb-project-details-kicker">0{i+1} / 0{n} · {E(p['kick'])}</span>
<h2 tabindex="-1">{E(p['title'])}</h2>
<p class="sb-project-details-summary">{E(p['sum'])}</p>
<div class="sb-project-details-actions">{lk}</div>
</header>
{body}</article>
'''

exp = ""
for e in experience:
    li = "".join(f"<li>{E(x)}</li>" for x in e['pts']); tg = "".join(f"<span>{E(t)}</span>" for t in e['tech'])
    lk = f'<a class="ak-link" href="{e["link"][1]}" target="_blank" rel="noopener noreferrer">{e["link"][0]} <i class="ph ph-arrow-up-right"></i></a>' if e.get('link') else ""
    if e.get('cert'):
        side = (f'<div class="ak-side has-cert" tabindex="0" aria-label="Hover or tap to view the {E(e["org"])} certificate"><div class="ak-slide">'
                f'<div class="ak-pane ak-tags">{tg}<p class="ak-hint"><i class="ph ph-arrow-left"></i> Hover to view certificate</p></div>'
                f'<a class="ak-pane ak-certpane" href="{IMG}certs/{e["cert"]}" target="_blank" rel="noopener noreferrer"><img src="{IMG}certs/{e["cert"]}" alt="{E(e["org"])} certificate" loading="lazy"><small>Certificate · {E(e["org"])}</small></a></div></div>')
    else:
        side = f'<div class="ak-side"><div class="ak-pane ak-tags">{tg}</div></div>'
    exp += f'''<div class="ak-row"><div class="ak-meta"><strong>{E(e['when'])}</strong><small>{E(e['mode'])}</small></div>
<div class="ak-main"><h3>{E(e['role'])}</h3><span class="ak-org">{E(e['org'])}</span><ul>{li}</ul>{lk}</div>
{side}</div>
'''
edu = "".join(f'<div class="ak-row ak-row-sm"><div class="ak-meta"><strong>{E(w)}</strong><small>{E(s)}</small></div><div class="ak-main"><h3>{E(d)}</h3><span class="ak-org">{E(i)}</span></div></div>' for d,i,w,s in education)
cert = "".join(f'<a class="ak-cert" href="{IMG}certs/{k}.jpg" target="_blank" rel="noopener noreferrer"><img src="{IMG}certs/{k}.jpg" alt="{E(t)} certificate" loading="lazy"><h3>{E(t)}</h3><span>{E(i)} · {y}</span></a>' for t,i,y,k in certs)
aw = "".join(f"<span>{E(a)}</span>" for a in awards)
stk = "".join(f"<span>{E(s)}</span>" for s in stack)
PAPER_PDF = "/assets/papers/IoT-Based-Dynamic-Traffic-Management-System.pdf"
def side(tags, cert=None, label=""):
    tg = "".join(f"<span>{E(t)}</span>" for t in tags)
    if cert:
        return (f'<div class="ak-side has-cert" tabindex="0" aria-label="Hover or tap to view the certificate"><div class="ak-slide">'
                f'<div class="ak-pane ak-tags">{tg}<p class="ak-hint"><i class="ph ph-arrow-left"></i> Hover to view certificate</p></div>'
                f'<a class="ak-pane ak-certpane" href="{IMG}certs/{cert}" target="_blank" rel="noopener noreferrer"><img src="{IMG}certs/{cert}" alt="{E(label)}" loading="lazy"><small>{E(label)}</small></a></div></div>')
    return f'<div class="ak-side"><div class="ak-pane ak-tags">{tg}</div></div>'
research_rows = f'''<div class="ak-row"><div class="ak-meta"><strong>2024</strong><small>Presented</small></div>
<div class="ak-main"><h3>IoT Based Dynamic Traffic Management System</h3><span class="ak-org">Research paper · ICAMT 2024</span>
<ul><li>International Conference on Additive Manufacturing Technologies by SERB (New Delhi), Mahendra Institute of Technology, Namakkal</li><li>Authors: Jayasutha P, Akshaya K, Kavya A, Kavya M</li></ul>
<div class="ak-actions"><a class="ak-link" href="{PAPER_PDF}" target="_blank" rel="noopener noreferrer">View paper <i class="ph ph-arrow-up-right"></i></a><a class="ak-link" href="{PAPER_PDF}" download="IoT-Based-Dynamic-Traffic-Management-System.pdf">Download PDF <i class="ph ph-download-simple"></i></a></div></div>
{side(["Research paper","IoT","Traffic management","ICAMT 2024"], "paper.jpg", "ICAMT 2024 · Certificate of Presentation")}</div>
'''
ach = [("2024","Competition","Smart India Hackathon","Participated twice in the Smart India Hackathon, building AI-powered traffic management solutions that consistently impressed juries with innovation and execution.",None),
       ("2024","Presentation","Best Technical Presentation","Awarded for presenting a blockchain-based voting system at the Annual Technical Symposium, demonstrating clear understanding of complex concepts.",None),
       ("2024","Competition","TANCAM National Level Hackathon","Competed against 500+ teams, cleared two rounds out of three, and secured 23rd place with an innovative smart mobility prototype.",None),
       ("2023","Leadership","Tech Symposium – Outstanding Contributor","Recognized for exceptional contribution to the organizing committee and successful coordination of technical events.",None)]
for yr,cat,t,note,cimg in ach:
    research_rows += f'''<div class="ak-row"><div class="ak-meta"><strong>{yr}</strong><small>{E(cat)}</small></div>
<div class="ak-main"><h3>{E(t)}</h3><ul><li>{E(note)}</li></ul></div>
{side([cat], cimg, t + " certificate")}</div>
'''

marq = "\n".join(f'<div><h2 class="marquee-two-title marquee-three-title text-uppercase {"text-white" if j%2==0 else "text-stroke"}">Services <span class="text-white">-</span></h2></div>' for j in range(5))

page = f'''<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="description" content="Akshaya Kumar — Computer Science Engineer and Full-Stack Developer skilled in React, Python, FastAPI, Node.js, mobile apps and AI. Fresher open to Software Developer and Full Stack roles.">
<meta name="keywords" content="Akshaya Kumar, Full-Stack Developer, React, Python, FastAPI, Node.js, Flutter, Firebase, AI, Salem">
<meta name="robots" content="INDEX,FOLLOW">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Akshaya Kumar — Full-Stack Developer | React | Python | AI</title>
<link href="/favicon.png" rel="icon" type="image/png">
<link href="/assets/css/bootstrap.min.css" rel="stylesheet">
<link href="/assets/css/swiper-bundle.css" rel="stylesheet">
<link href="/assets/css/magnific-popup.css" rel="stylesheet">
<link href="/assets/css/aos.css" rel="stylesheet">
<link href="/assets/css/main.css" rel="stylesheet">
<link href="/assets/css/project-details.css" rel="stylesheet">
<link href="/assets/css/akshaya.css" rel="stylesheet">
<noscript><style>.preloader{{display:none}}body.is-loading{{overflow:auto}}</style></noscript>
</head>
<body class="tw-magic-cursor is-loading">
<div class="preloader">
<svg preserveAspectRatio="none" viewBox="0 0 1000 1000"><path d="M0 1000S175 1000 500 1000s500 0 500 0V0H0Z" id="preloaderSvg"></path></svg>
<div class="preloader-heading"><div class="load-text"><span>L</span><span>o</span><span>a</span><span>d</span><span>i</span><span>n</span><span>g</span></div></div>
</div>
<div class="overlay"></div>
<div class="side-overlay"></div>
<div id="magic-cursor"><div id="ball"></div></div>
<div id="toast-container"></div>
<div class="back-to-top-wrapper"><button class="back-to-top-btn" id="back_to_top" type="button">
<svg fill="none" height="7" viewBox="0 0 12 7" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M11 6L6 1L1 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path></svg></button></div>

<div class="tw-offcanvas-2-area p-relative">
<div class="tw-offcanvas-2-bg is-left left-box"></div>
<div class="tw-offcanvas-2-bg is-right right-box d-none d-md-block"></div>
<div class="tw-offcanvas-2-wrapper">
<div class="tw-offcanvas-2-left left-box">
<div class="tw-offcanvas-2-left-wrap d-flex justify-content-between align-items-center">
<div class="twoffcanvas__logo"><a class="logo-1" href="#home"><img alt="logo" src="{IMG}logo/logo.png"></a></div>
<div class="tw-offcanvas-2-close d-md-none text-end"><button class="tw-offcanvas-2-close-btn tw-offcanvas-2-close-btn"><span class="text"><span class="text-white">close</span></span>
<span class="d-inline-block"><span><svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect fill="currentcolor" height="1.00918" transform="matrix(0.704882 0.709325 -0.704882 0.709325 1.0061 0)" width="32.621"></rect><rect fill="currentcolor" height="1.00918" transform="matrix(0.704882 -0.709325 0.704882 0.709325 0 23.2842)" width="32.621"></rect></svg></span></span></button></div>
</div>
<div class="tw-main-menu-mobile menu-hover-active counter-row"></div>
</div>
<div class="tw-offcanvas-2-right right-box d-none d-md-block p-relative">
<div class="tw-offcanvas-2-close text-end"><button class="tw-offcanvas-2-close-btn"><span class="text"><span>close</span></span>
<span class="d-inline-block"><span><svg fill="none" height="38" viewBox="0 0 38 38" width="38" xmlns="http://www.w3.org/2000/svg"><path d="M9.80859 9.80762L28.1934 28.1924" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path><path d="M9.80859 28.1924L28.1934 9.80761" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path></svg></span></span></button></div>
<div class="tw-offcanvas-2-right-inner d-flex flex-column justify-content-between h-100">
<div class="twoffcanvas__contact-info">
<div class="twoffcanvas__contact-title"><h5 class="text-white">Contact us</h5></div>
<ul>
<li><span class="text-main-two-600 tw-text-xl"><i class="ph ph-map-pin-line"></i></span><a class="text-white" href="#contact">{L['loc']}</a></li>
<li><span class="text-main-two-600 tw-text-xl"><i class="ph ph-envelope"></i></span><a class="text-white" href="mailto:{L['mail']}">{L['mail']}</a></li>
<li><span class="text-main-two-600 tw-text-xl"><i class="ph ph-phone-call"></i></span><a class="text-white" href="tel:{L['tel']}">{L['tel_show']}</a></li>
</ul>
</div>
<div class="footer-social" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
<ul class="tw-gap-2">
<li><a href="{L['gh']}" target="_blank" rel="noopener noreferrer"><span class="active-media d-flex align-items-center tw-gap-1">GITHUB <i class="ph ph-arrow-bend-up-right"></i></span><span class="hover-media"><i class="ph ph-github-logo"></i></span></a></li>
<li><a href="{L['li']}" target="_blank" rel="noopener noreferrer"><span class="active-media d-flex align-items-center tw-gap-1">LINKEDIN <i class="ph ph-arrow-bend-up-right"></i></span><span class="hover-media"><i class="ph ph-linkedin-logo"></i></span></a></li>
<li><a href="{L['ig']}" target="_blank" rel="noopener noreferrer"><span class="active-media d-flex align-items-center tw-gap-1">INSTAGRAM <i class="ph ph-arrow-bend-up-right"></i></span><span class="hover-media"><i class="ph ph-instagram-logo"></i></span></a></li>
<li><a href="mailto:{L['mail']}"><span class="active-media d-flex align-items-center tw-gap-1">EMAIL <i class="ph ph-arrow-bend-up-right"></i></span><span class="hover-media"><i class="ph ph-envelope-simple"></i></span></a></li>
</ul>
</div>
</div></div></div></div>

<header class="header header-two header-three tw-transition-all tw-z-99 position-relative">
<div class="container tw-container-1800-px">
<nav class="d-flex align-items-center justify-content-between position-relative">
<div class="header-three-logo tw-rounded-md"><a class="link d-inline-flex align-items-center tw-gap-3" href="#home"><img alt="AK logo" class="sb-header-mark" src="{IMG}logo/logo.png"><span class="sb-header-name">{NAME}</span></a></div>
<div class="header-three-social d-none d-lg-block"><ul class="d-flex tw-gap-205">
<li><a class="{SOC}" href="{L['gh']}" rel="noopener noreferrer" target="_blank" aria-label="GitHub profile"><i class="ph-bold ph-github-logo"></i></a></li>
<li><a class="{SOC}" href="{L['li']}" rel="noopener noreferrer" target="_blank" aria-label="LinkedIn profile"><i class="ph-bold ph-linkedin-logo"></i></a></li>
<li><a class="{SOC}" href="mailto:{L['mail']}" aria-label="Email"><i class="ph-bold ph-envelope-simple"></i></a></li>
<li><a class="{SOC}" href="https://leetcode.com/u/AkshayaMIT/" rel="noopener noreferrer" target="_blank" aria-label="LeetCode profile"><i class="ph-bold ph-code"></i></a></li>
</ul></div>
<div class="header-menu d-none"><div class="main-menu"><nav class="tw-main-menu-content"><ul>
{menu_li}
</ul></nav></div></div>
<div class="header-right d-flex align-items-center tw-gap-705">
<div class="header-three-menu"><button class="tw-offcanvas-open-btn tw-w-13 tw-h-13 lh-1 d-inline-flex justify-content-center align-items-center tw-transition-3 tw-rounded-md"><span><img alt="toggle" class="tw-transition-3" src="{IMG}icons/header-three-toggle.svg"></span></button></div>
<div class="header-three-button d-none d-md-block"><a class="tw-hover-btn bg-black text-white fw-bold tw-py-4 tw-px-10 d-inline-block hover-text-white text-uppercase tw-rounded-md" href="{L['cv']}" data-cv-open aria-haspopup="dialog">
download cv
<span class="tw-hover-btn-circle-dot bg-main-two-600"></span></a></div>
</div>
</nav>
</div>
</header>

<div id="smooth-wrapper"><div id="smooth-content">

<section class="banner-three-area" id="home">
<div class="container tw-container-1800-px"><div class="row"><div class="col-xl-12">
<div class="banner-three-wrapper position-relative z-1">
<div class="banner-three-man position-absolute start-50 translate-middle-x"><img alt="Akshaya Kumar — Full-Stack Developer" src="{IMG}shapes/akshaya-waist.png"></div>
<h1 class="banner-three-title text-black tw-mb-30">developer</h1>
<div class="banner-three-wrap d-flex justify-content-between align-items-end position-relative z-1">
<div class="banner-three-left tw-rounded-lg" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
<h2 class="banner-three-left-title tw-text-3xl tw-mb-6">Hello! I'm Akshaya Kumar. a full-stack developer and AI builder from Salem.</h2>
<div class="banner-three-list"><ul>
{"".join(f'<li class="tw-text-lg fw-medium d-inline-flex align-items-center tw-gap-2 tw-mb-4"><span><img alt="pluse" src="{IMG}icons/banner-three-pluse.svg"></span> {x}</li>' for x in ["Web Development","Mobile Apps","AI / Machine Learning","Python &amp; Cloud"])}
</ul></div>
</div>
<div class="banner-three-center text-center" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
<h3 class="banner-three-center-title tw-text-120">Full-stack, mobile and AI-powered development made better.</h3>
<div class="banner-three-button"><a class="tw-hover-btn bg-black text-white fw-bold tw-py-4 tw-px-10 d-inline-block hover-text-white text-uppercase tw-rounded-lg" href="#projects"> view projects <span class="tw-hover-btn-circle-dot bg-main-two-600"></span></a></div>
</div>
<div class="banner-three-right tw-rounded-lg" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
<div class="banner-three-counter-item tw-rounded-md tw-mb-4 position-relative"><h4 class="banner-three-counter-title tw-text-101 fw-semibold font-heading text-heading tw-mb-2 lh-1"><span class="purecounter font-heading" data-purecounter-duration="0" data-purecounter-end="6">6</span><span>+</span></h4><p class="banner-three-counter-paragraph tw-text-lg fw-medium text-heading">Featured Projects</p></div>
<div class="banner-three-counter-item tw-rounded-md tw-mb-4 ms-auto bg-black"><h4 class="banner-three-counter-title tw-text-101 fw-semibold font-heading text-white tw-mb-2 lh-1"><span class="purecounter font-heading" data-purecounter-duration="0" data-purecounter-end="3">3</span><span>+</span></h4><p class="banner-three-counter-paragraph tw-text-lg fw-medium text-white">Internships</p></div>
<div class="banner-three-counter-item tw-rounded-md tw-mb-4">
<div class="d-flex align-items-center tw-mb-2 tw-gap-2"><span class="tw-w-9 tw-h-9 rounded-circle d-inline-flex align-items-center justify-content-center bg-black text-white fw-bold">Py</span><span class="tw-w-9 tw-h-9 rounded-circle d-inline-flex align-items-center justify-content-center border border-2 border-white bg-white text-heading fw-bold">⚛</span><span class="tw-w-9 tw-h-9 rounded-circle d-inline-flex align-items-center justify-content-center bg-black text-white fw-bold">AI</span></div>
<h4 class="banner-three-counter-title tw-text-101 fw-semibold font-heading text-heading tw-mb-2 lh-1">8.6</h4><p class="banner-three-counter-paragraph tw-text-lg fw-medium text-heading">CGPA</p></div>
</div>
<div class="banner-three-line-shape position-absolute start-50 translate-middle-x z-n1"><img alt="shape" src="{IMG}shapes/banner-three-shape.png"><div class="banner-three-carcel-shape"><div><span></span></div></div></div>
</div></div></div></div></div>
</section>

<section class="about-three-area py-120 position-relative z-1" id="about">
<div class="container tw-container-1800-px">
<div class="about-three-top position-relative z-1">
<div class="row justify-content-center tw-mb-21"><div class="col-xl-9"><div class="text-center">
<h2 class="about-three-title text-heading tw-text-15 tw-itm-title tw-itm-anim">I build full-stack web and mobile applications with a focus on clean code, real-time features, and real-world impact.</h2>
</div></div></div>
<div class="row justify-content-center"><div class="col-xl-6"><div class="about-three-right" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000"><div>
<p class="tw-text-xl tw-mb-10">I’m a Computer Science Engineering graduate from Salem, Tamil Nadu, with hands-on experience in full-stack web development, mobile applications, and emerging technologies. I’m a fresher seeking my first role as a Software Developer, Python Developer or Full Stack Developer.</p>
<p class="tw-text-xl tw-mb-10">I have worked on production-grade applications including restaurant reservation systems and real-time collaboration platforms, using React, FastAPI, Node.js, Firebase and more.</p>
<p class="tw-text-xl tw-mb-10">I completed my B.E. in Computer Science &amp; Engineering at Mahendra Institute of Technology, Namakkal, with a CGPA of 8.6, and I’m building digital solutions that solve real-world problems through clean, efficient code.</p>
</div></div></div></div>
<div class="about-three-wrap-shape d-flex justify-content-between">
<div class="banner-three-counter-item tw-rounded-md position-relative" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000"><h2 class="banner-three-counter-title tw-text-101 fw-semibold font-heading text-heading tw-mb-2 lh-1">8.6</h2><p class="banner-three-counter-paragraph tw-text-lg fw-medium text-heading">CGPA</p></div>
<div class="banner-three-counter-item tw-rounded-md position-relative" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000"><h2 class="banner-three-counter-title tw-text-101 fw-semibold font-heading text-heading tw-mb-2 lh-1">2026</h2><p class="banner-three-counter-paragraph tw-text-lg fw-medium text-heading">Graduation Year</p></div>
</div>
</div></div>
<div><img alt="shape" class="about-three-shape position-absolute start-0 w-100" src="{IMG}shapes/about-three-shape.png"></div>
</section>

<div class="marquee tw-pt-17 bg-black">
<div class="marquee_left d-flex align-items-center justify-content-between tw-gap-16 overflow-hidden">
{marq}
</div></div>

<section class="service-three-area bg-black pt-120 tw-pb-15" id="skills">
<div class="container tw-container-1800-px"><div class="row"><div class="col-12"><div class="service-three-wrapper">
{svc}</div></div></div></div>
</section>

<section class="sb-project-reel-area sb-projects-simple" id="projects">
<div class="container tw-container-1800-px">
<div class="sb-project-heading"><div><span class="sb-eyebrow">Selected work</span><h2>Projects that move from idea to product.</h2></div>
<p>Six featured builds, shown simply so each project stays visible and easy to explore.</p></div>
<div class="sb-project-list">
{cards}</div>
</div>
</section>

<section class="ak-area" id="experience">
<div class="container tw-container-1800-px">
<div class="sb-project-heading"><div><span class="sb-eyebrow">Experience</span><h2>Internships, workshops and freelance work.</h2></div>
<p>Hands-on experience across Python, Java, full-stack web and mobile development.</p></div>
<div class="ak-list">{exp}</div>

<div class="sb-project-heading ak-gap"><div><span class="sb-eyebrow">Education</span><h2>Where I studied.</h2></div></div>
<div class="ak-list">{edu}</div>

<div class="sb-project-heading ak-gap"><div><span class="sb-eyebrow">Research &amp; achievements</span><h2>Papers, hackathons and awards.</h2></div></div>
<div class="ak-list">{research_rows}</div>

<div class="sb-project-heading ak-gap"><div><span class="sb-eyebrow">Certifications</span><h2>Courses I completed.</h2></div></div>
<div class="ak-certs">{cert}</div>
</div>
</section>

<section class="sb-stack-area">
<div class="container tw-container-1800-px">
<div class="sb-stack-title"><span class="sb-eyebrow">Technical stack</span><h2>Tools I build with.</h2></div>
<div class="sb-stack-marquee"><div class="sb-stack-row">{stk}</div><div class="sb-stack-row" aria-hidden="true">{stk}</div></div>
</div>
</section>

<section class="footer-three-area pt-120 tw-pb-10 position-relative z-1" id="contact">
<div class="container tw-container-1800-px">
<div class="row justify-content-between pb-120">
<div class="col-xl-5 col-lg-6"><div class="footer-three-top-left tw-me-25" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
<div class="tw-mb-9"><h2 class="tw-text-15 text-white tw-char-animation">Let’s create something meaningful</h2></div>
<div class="d-inline-flex align-items-center tw-gap-6 tw-mb-10 flex-wrap">
<a class="tw-text-2xl fw-medium text-main-600 hover-underline hover-text-white" href="mailto:{L['mail']}">{L['mail']}</a>
<span class="tw-text-2xl fw-medium text-main-600">//</span>
<a class="tw-text-2xl fw-medium text-main-600 hover-underline hover-text-white" href="tel:{L['tel']}">{L['tel_show']}</a>
</div>
<div class="footer-three-top-info tw-p-705 tw-rounded-lg d-flex tw-gap-6">
<div class="sb-footer-mark" aria-hidden="true">AK</div>
<div class="footer-three-top-content d-flex justify-content-between flex-column">
<div><h3 class="tw-text-xl text-white tw-mb-2">{NAME}</h3><p class="text-white">Full-Stack Developer | Python | React | AI</p></div>
<div class="footer-three-social"><ul class="d-flex align-items-center tw-gap-1">
<li><a class="{FSOC}" href="{L['gh']}" target="_blank" rel="noopener noreferrer"><i class="ph ph-github-logo"></i></a></li>
<li><a class="{FSOC}" href="{L['li']}" target="_blank" rel="noopener noreferrer"><i class="ph ph-linkedin-logo"></i></a></li>
<li><a class="{FSOC}" href="{L['ig']}" target="_blank" rel="noopener noreferrer"><i class="ph ph-instagram-logo"></i></a></li>
<li><a class="{FSOC}" href="mailto:{L['mail']}"><i class="ph ph-envelope-simple"></i></a></li>
</ul></div>
</div></div></div></div>
<div class="col-xl-6 col-lg-6"><div class="footer-three-form" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
<form action="mailto:{L['mail']}" method="post" enctype="text/plain" data-contact-form><div class="row">
<div class="col-xl-12"><div class="position-relative tw-mb-7"><input class="form-control bg-transparent shadow-none tw-rounded-lg text-white tw-ps-7 tw-pe-13 tw-placeholder-text-neutral-100 focus-border-main-600 tw-h-18 focus-tw-placeholder-text-hidden tw-placeholder-transition-2" name="name" placeholder="First Name" required type="text"></div></div>
<div class="col-xl-12"><div class="position-relative tw-mb-7"><input class="form-control bg-transparent shadow-none tw-rounded-lg text-white tw-ps-7 tw-pe-13 tw-placeholder-text-neutral-100 focus-border-main-600 tw-h-18 focus-tw-placeholder-text-hidden tw-placeholder-transition-2" name="email" placeholder="Email Address" required type="email"></div></div>
<div class="col-xl-12"><div class="position-relative tw-mb-7"><textarea class="form-control bg-transparent shadow-none tw-h-196-px tw-rounded-lg text-white tw-ps-7 tw-pe-13 tw-placeholder-text-neutral-100 focus-border-main-600 focus-tw-placeholder-text-hidden tw-placeholder-transition-2" name="message" placeholder="Message" required></textarea></div></div>
<div class="col-xl-12"><div class="contact-button"><button class="tw-hover-btn bg-main-600 text-heading tw-text-xl fw-bold tw-py-4 tw-px-10 d-inline-flex justify-content-center w-100 hover-text-heading hover-bg-white tw-transition-3 tw-rounded-lg">submit message</button></div></div>
</div></form></div></div>
</div></div>
<div class="footer-three-border tw-px-18 tw-mb-10"><div class="container-fluid gx-0"><div class="row"><div class="col-xl-12">
<div class="footer-three-middile d-flex align-items-center justify-content-between">
<div data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000"><h4 class="tw-text-2xl text-white tw-mb-2">Quick Links</h4>
<ul class="d-flex tw-gap-2 flex-wrap"><li><a class="tw-text-lg text-white" href="#home">Home,</a></li><li><a class="tw-text-lg text-white" href="#about">About Me,</a></li><li><a class="tw-text-lg text-white" href="#projects">Portfolio,</a></li><li><a class="tw-text-lg text-white" href="#skills">Service,</a></li><li><a class="tw-text-lg text-white" href="#contact">Contact</a></li></ul></div>
<div data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000"><a class="footer-three-back-to-top tw-w-170 tw-h-170 lh-1 d-inline-flex justify-content-center align-items-center bg-main-two-600 text-white tw-text-3xl rounded-circle" href="#home"><i class="ph ph-arrow-up"></i></a></div>
<div class="text-lg-end" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000"><h4 class="tw-text-2xl text-white tw-mb-2">{NAME}</h4><p class="tw-text-lg text-white">© 2026 {NAME}. All rights reserved</p></div>
</div></div></div></div></div>
<div><div class="container tw-container-1800-px"><div class="row"><div class="col-xl-12"><div class="footer-three-bottom"><h5 class="footer-three-bottom-title text-white">{NAME}</h5></div></div></div></div></div>
<div><img alt="shape" class="position-absolute top-0 start-0 z-n1" src="{IMG}shapes/footer-three-bg-shape.png"></div>
</section>

</div></div>

<div class="sb-project-details-overlay" id="sb-project-details-overlay" aria-hidden="true">
<div class="sb-project-details-backdrop" data-project-details-backdrop></div>
<button class="sb-project-details-close sb-project-details-home-action" type="button" data-project-details-close aria-label="Go back home"><i class="ph ph-arrow-left"></i> Go back home</button>
<div class="sb-project-details-inner">
<div class="sb-project-details-top"><span class="sb-project-details-kicker">Project case study</span></div>
{details}</div>
</div>

<div class="cv-modal" id="cv-modal" role="dialog" aria-modal="true" aria-labelledby="cv-title" hidden>
<div class="cv-backdrop" data-cv-close></div>
<div class="cv-panel">
<button class="cv-x" type="button" data-cv-close aria-label="Close"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true"><path d="M3 3l12 12M15 3L3 15" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg></button>
<span class="sb-eyebrow">Download CV</span>
<h3 id="cv-title">Which resume do you need?</h3>
<p class="cv-sub">Pick the role that fits. The PDF downloads straight to your device.</p>
<a class="cv-opt" href="/assets/resumes/Akshaya-Kumar-Fresher-Python-Full-Stack-Developer-Resume.pdf" download="Akshaya-Kumar-Fresher-Python-Full-Stack-Developer-Resume.pdf"><span class="cv-n">01</span><span class="cv-t"><strong>Fresher · Python Full Stack Developer</strong><small>Python, Django, FastAPI, React.js</small></span><i class="ph ph-download-simple"></i></a>
<a class="cv-opt" href="/assets/resumes/Akshaya-Kumar-Fresher-Software-Developer-Resume.pdf" download="Akshaya-Kumar-Fresher-Software-Developer-Resume.pdf"><span class="cv-n">02</span><span class="cv-t"><strong>Fresher · Software Developer</strong><small>DSA, OOP, Java, Python, React.js</small></span><i class="ph ph-download-simple"></i></a>
<a class="cv-opt" href="/assets/resumes/Akshaya-Kumar-Fresher-Python-Developer-Resume.pdf" download="Akshaya-Kumar-Fresher-Python-Developer-Resume.pdf"><span class="cv-n">03</span><span class="cv-t"><strong>Fresher · Python Developer</strong><small>Python, REST APIs, SQL/NoSQL, automation</small></span><i class="ph ph-download-simple"></i></a>
</div>
</div>

<script src="/assets/js/jquery-3.7.1.min.js"></script>
<script src="/assets/js/phosphor-icon.js"></script>
<script src="/assets/js/boostrap.bundle.min.js"></script>
<script src="/assets/js/aos.js"></script>
<script src="/assets/js/magnific-popup.min.js"></script>
<script src="/assets/js/jquery.marquee.min.js"></script>
<script src="/assets/js/purecounter.js"></script>
<script src="/assets/js/swiper-bundle.min.js"></script>
<script src="/assets/js/gsap.js"></script>
<script src="/assets/js/gsap-scroll-to-plugin.js"></script>
<script src="/assets/js/gsap-scroll-smoother.js"></script>
<script src="/assets/js/gsap-scroll-trigger.js"></script>
<script src="/assets/js/gsap-split-text.js"></script>
<script src="/assets/js/chroma.min.js"></script>
<script src="/assets/js/slider-active.js"></script>
<script src="/assets/js/custom-gsap.js"></script>
<script src="/assets/js/main.js"></script>
<script src="/assets/js/project-details.js"></script>
<script src="/assets/js/ak-cursor.js"></script>\n<script src="/assets/js/ak-ui.js"></script>
</body>
</html>
'''
open('/home/claude/site/index.html','w',encoding='utf-8').write(page)
print(len(page))
