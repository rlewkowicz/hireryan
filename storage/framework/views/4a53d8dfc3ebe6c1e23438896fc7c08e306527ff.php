<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="/css/app.css">
    <script type="text/javascript" src="/js/app.js"></script>
    <title>Hire Ryan Today!</title>
</head>
    <body>
        <div class="container page__container">
            <div class="header-text-container">
                <div class="header-text__1">
                    <h1 class='text-shadow'>Hire</h1>
                </div>
                <div class="header-text__2">
                    <h1 class="text-shadow">Ryan</h1>
                </div>
                <div class="header-text__3">
                    <h2>Today!</h2>
                </div>
            </div>
            <div class="header">
                <img src="media/images/Header.png" class="header__img">
            </div>
            <div class='separator'></div>
            <div id="nav-tabs">
                <ul class="nav-bar">
                    <li class="nav-bar__topic">
                        <a href='#about_me'>About Me</a>
                    </li>
                    <li class="nav-bar__topic">
                        <a href='#portfolio'>Portfolio</a>
                    </li>
                    <li class="nav-bar__topic">
                        <a href='#cv'>CV</a>
                    </li>
                </ul>
                <div id="about_me">
                    <div class='separator'></div>
                    <div class="presentation-container">
                        <div class="presentation__blurb-holder">

                        </div>
                        <div class="video-embed">
                            <iframe class="video-embed__iframe"
                                    src="https://www.youtube.com/embed/dj0keOzp4ds" frameborder="0" allowfullscreen>
                            </iframe>
                        </div>
                        <div id="about-me__content" class="portfolio__project-description">
                            <div class="project-description__title">
                                Ryan Lewkowicz
                            </div>
                            <div class="project-description__content">
                                <p>It’s kind of weird to think about something to say about myself.  I enjoy playing basketball and working out, It’s been a while on both of those fronts. I’m getting a little soft.  I like development and I like creating things. I truly enjoy my work. I love my community, and want to see it grow. I was apart of MITN for a while, but the shift at Liquidweb caused me to gain some distance there. I wish there was more, but the things I’ve made have kind of become who I am.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="portfolio" class="nav-tabs__portfolio">
                    <?php echo $__env->make('portfolio', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
                </div>
                <div id="cv">
                    <div class='separator'></div>
                    <?php echo $__env->make('cv', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
                </div>
            </div>
        </div>
    </body>
</html>
