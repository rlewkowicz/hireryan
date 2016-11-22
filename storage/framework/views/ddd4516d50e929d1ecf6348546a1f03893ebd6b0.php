<div class="presentation-container">
    <div class="presentation__blurb-holder">
        <div class="blurb">
            <div class="blurb__text">
                <p>To learn more about me, feel free to click on any heading and review the associated materials.</p>
                <p>If you're in a rush,
                    the headings "Liquid Web, Linux Administrator, Setups Engineer, and Development"
                    will give you the broadest overview of my experience. My favorite projects
                    (they're all pretty good) are Docker with HHVM, and Hireryan.today</p>
            </div>
        </div>
    </div>
    <div class="video-embed">
        <iframe class="video-embed__iframe" id="iframe"
                src="https://www.youtube.com/embed/3QX7tpOM9KQ" frameborder="0" allowfullscreen>
        </iframe>
    </div>
</div>
<div class="time-line" id='time-line-tabs'>
    <ul>
        <li class="time-line__employer">
            <a href="#portfolio__liquidweb">Liquid Web</a>
            <p>Nov 2012 - Nov 2015</p>
        </li>
        <li class="time-line__employer">
            <a>Free Agent</a>
            <p>Nov 2015 - Present</p>
        </li>
        <li class="time-line__project time-line__arrow-holder"></li>
        <li class="time-line__project time-line__project--top project--halfass time-line__project--first">
            <a href='#portfolio__halfass' class='project--halfass__container'>
                <p>Halfassadmin.com</p>
                <img src="./media/images/halfass-logo.png" alt="">
            </a>
        </li>
        <li class="time-line__project time-line__project--bottom project--gns3">
            <a href='#portfolio__gns3' class='project--gns3__container'>
                <div><img src="./media/images/gns3-logo.png" alt=""></div>
                <p>GNS3 & Hyper-V</p>
                <div><img src="./media/images/hyper-v.png" alt=""></div>
            </a>
        </li>
        <li class="time-line__project project--keyborg time-line__project--top">
            <a href='#portfolio__keyborg' class='project--keyborg__container'>
                <p><strong>KeyBorg LLC.</strong></p>
            </a>
        </li>
        <li class="time-line__project time-line__project--bottom project--docker">
            <a href='#portfolio__docker' class='project--docker__container'>
                <div><img src="./media/images/docker-logo1.png" alt=""></div>
                <p>Docker & HHVM</p>
                <div><img src="./media/images/hhvm-logo.png" alt=""></div>
            </a>
        </li>
        <li class="time-line__project time-line__project--top project--lead-tracker">
            <a href='#portfolio__leadtracker' class='project--lead-tracker__container'>
                <p>Lead</p>
                <p>Tracker</p>
            </a>
        </li>
        <li class="time-line__project time-line__project--top project--hireryan">
            <a href='#portfolio__hireryan' class='project--hireryan__container'>
                <p>HireRyan.Today</p>
                <div><img src="./media/images/Header.png" alt=""></div>
            </a>
        </li>
        <li class="time-line__project time-line__project--bottom project--binaryoasis time-line__project--last">
            <a href='#portfolio__binaryoasis' class='project--binaryoasis__container'>
                <div><img src="./media/images/bi2.png" alt=""></div>
                <p>BinaryOasis.com</p>
            </a>
        </li>
        <li class="time-line__job time-line__job--linux">
            <a href='#portfolio__linux'>Linux Administrator</a>
            <p>Nov 2012 - Oct 2014</p>
        </li>
        <li class="time-line__job time-line__job--setups">
            <a href='#portfolio__setups'>Setups Engineer</a>
            <p>Oct 2014 - Nov 2015</p>
        </li>
        <li class="time-line__job time-line__job--dev">
            <a href='#portfolio__development'>Development</a>
            <p>Nov 2015 - Present</p>
        </li>
    </ul>
    <?php echo $__env->make('time-line-divs', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
</div>