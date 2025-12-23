<template>
    <header>
        <div class="container-fluid">
            <h1><router-link to="/">minjukang</router-link></h1>
            <ul class="gnb flex gap-3 ml-auto">
                <li><router-link to="/about">about,</router-link></li>
                <li><router-link to="/projects">projects</router-link></li>
            </ul>
        </div>
    </header>
</template>
<style lang="scss">
header{
    height: 6.2rem;
    // border-bottom: 1px solid;
    padding-top:2rem;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 90001;
    transform: translateZ(0);
    height: 62px;
    mix-blend-mode: difference;
    color:#fff;
    font-size: 1.2rem;
    font-weight: 700;
    letter-spacing: -0.25px;
    .container-fluid{
        height: 100%;
        display: flex;
        align-items: center;
    }
    .gnb li a:hover{
        text-decoration: underline;
    }
}
</style>