export default function Home() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sanjeev NC - Product Manager</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 800px;
            margin: 0 auto;
            padding: 0 20px;
            background: #fff;
        }
        
        header {
            padding: 60px 0 40px;
            border-bottom: 1px solid #eee;
            margin-bottom: 40px;
        }
        
        h1 {
            font-size: 2.5rem;
            font-weight: 700;
            margin-bottom: 8px;
            color: #111;
        }
        
        .tagline {
            font-size: 1.1rem;
            color: #666;
            margin-bottom: 20px;
        }
        
        nav {
            margin-top: 30px;
        }
        
        nav a {
            color: #666;
            text-decoration: none;
            margin-right: 30px;
            font-weight: 500;
            transition: color 0.2s;
        }
        
        nav a:hover {
            color: #111;
        }
        
        .section {
            margin-bottom: 60px;
        }
        
        .section h2 {
            font-size: 1.5rem;
            margin-bottom: 20px;
            color: #111;
            font-weight: 600;
        }
        
        .blog-post {
            padding: 20px 0;
            border-bottom: 1px solid #f0f0f0;
        }
        
        .blog-post:last-child {
            border-bottom: none;
        }
        
        .blog-post h3 {
            font-size: 1.2rem;
            margin-bottom: 8px;
            color: #111;
        }
        
        .blog-post h3 a {
            color: #111;
            text-decoration: none;
        }
        
        .blog-post h3 a:hover {
            color: #007acc;
        }
        
        .blog-meta {
            font-size: 0.9rem;
            color: #888;
            margin-bottom: 10px;
        }
        
        .blog-excerpt {
            color: #555;
            line-height: 1.5;
        }
        
        .about-content {
            color: #555;
            line-height: 1.7;
        }
        
        footer {
            margin-top: 80px;
            padding: 40px 0;
            border-top: 1px solid #eee;
            text-align: center;
            color: #888;
            font-size: 0.9rem;
        }
        
        .social-links {
            margin-top: 15px;
        }
        
        .social-links a {
            color: #666;
            text-decoration: none;
            margin: 0 15px;
            transition: color 0.2s;
        }
        
        .social-links a:hover {
            color: #111;
        }
        
        @media (max-width: 600px) {
            h1 {
                font-size: 2rem;
            }
            
            nav a {
                display: block;
                margin: 10px 0;
            }
        }
    </style>
</head>
<body>
    <header>
        <h1>Sanjeev NC</h1>
        <p class="tagline">Product Manager & Tech Writer</p>
        <nav>
            <a href="#blog">Blog</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
        </nav>
    </header>

    <main>
        <section id="blog" class="section">
            <h2>Latest Posts</h2>
            
            <article class="blog-post">
                <h3><a href="#">Building Better Product Roadmaps in 2024</a></h3>
                <div class="blog-meta">December 15, 2024</div>
                <p class="blog-excerpt">How to create product roadmaps that actually help your team ship better features faster. Key frameworks and tools I've learned from leading product teams.</p>
            </article>
            
            <article class="blog-post">
                <h3><a href="#">The AI Product Manager's Toolkit</a></h3>
                <div class="blog-meta">December 8, 2024</div>
                <p class="blog-excerpt">Essential AI tools every product manager should know about. From user research to feature prioritization, here's how AI is changing the PM workflow.</p>
            </article>
            
            <article class="blog-post">
                <h3><a href="#">Why Most Product Metrics Are Wrong</a></h3>
                <div class="blog-meta">November 30, 2024</div>
                <p class="blog-excerpt">The common mistakes teams make when choosing product metrics, and how to build a measurement framework that actually drives decisions.</p>
            </article>
        </section>

        <section id="about" class="section">
            <h2>About</h2>
            <div class="about-content">
                <p>I'm a product manager passionate about building technology that makes people's lives better. Currently working on consumer products at scale, with a focus on user experience and growth.</p>
                
                <p>I write about product management, technology trends, and lessons learned from shipping products. My goal is to share practical insights that help other PMs and builders create better products.</p>
                
                <p>When I'm not thinking about products, you'll find me exploring new technologies, reading about design, or experimenting with side projects.</p>
            </div>
        </section>
    </main>

    <footer id="contact">
        <p>Get in touch</p>
        <div class="social-links">
            <a href="mailto:hello@sanjeev.dev">Email</a>
            <a href="https://twitter.com/sanjeevnc">Twitter</a>
            <a href="https://linkedin.com/in/sanjeevnc">LinkedIn</a>
        </div>
    </footer>
</body>
</html>` }} />
  );
}