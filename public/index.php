<?php
require '../core/init.php';
require DIRROOT . "template/header.php";
?>
<header>

</header>
<main>
    <section id="about">
        <div class="about-header">
            <h1>WEB DEVELOPER</h1>
            <span class="span-index">about</span>
        </div>
        <div class="about-main"></div>
    </section>
    <section id="my-project">
        <span class="span-index">project</span>
        <div id="project"></div>
    </section>
    <section id="skils-learn">
        <section class="skills">
            <span class="span-index">skills</span>
            <div id="skills"></div>
        </section>
        <section class="learning">
            <span class="span-index">learning</span>
            <div id="learning"></div>
        </section>
    </section>
</main>

<?php include DIRROOT . "template/footer.php"; ?>