<template>
  <v-app>
    <v-card color="white" flat height="100%" tile>
      <v-toolbar
        dense
        dark
        :elevation="windowTop ? '5' : '0'"
        class="navMain"
        :style="!windowTop ? 'background-color: #00000000 !important' : ''"
      >
        <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
        <a href="#home">
          <v-avatar data-cursor-hover size="36">
            <v-img
              lazy-src="../public/img/self.png"
              max-height="100"
              max-width="100"
              src="../public/img/self.png"
            >
            </v-img>
          </v-avatar>
        </a>
        <v-spacer></v-spacer>

        <v-list
          class="pa-0 d-flex"
          dense
          :color="!windowTop ? '#00000000' : '#0c0102'"
        >
          <v-hover
            v-slot="{ hover }"
            close-delay="200"
            v-for="(item, i) in navTexts"
            :key="i + 'ccc'"
          >
            <v-list-item
              data-cursor-hover
              :style="hover ? 'border-bottom:4px solid white' : ''"
              class="pa-1"
            >
              <a style="text-decoration: none !important" :href="item.link">
                <v-list-item-content>
                  <v-list-item-title class="navCss">{{
                    item.text
                  }}</v-list-item-title>
                </v-list-item-content>
              </a>
            </v-list-item>
          </v-hover>
        </v-list>
      </v-toolbar>

      <template>
        <v-img dark height="650" src="../public/img/bg2.jpg">
          <v-row id="home" align="center" style="height: 100%">
            <v-col cols="12">
              <v-container class="myName">
                <kinesis-container>
                  <kinesis-element :strength="10">
                    <p class="homeFont">Hi,</p>
                  </kinesis-element>
                  <kinesis-element :strength="20">
                    <p class="homeFont">
                      My name is <span class="redSpan">Rey,</span>
                    </p>
                  </kinesis-element>
                  <kinesis-element :strength="30">
                    <p class="homeFont">Welcome to my Portfolio</p>
                  </kinesis-element>
                  <div data-aos="fade-right">
                    <p class="homeFontSub">
                      <span class="redSpan">{</span>rey-dev<span class="redSpan"
                        >}</span
                      >
                    </p>
                  </div>
                </kinesis-container>
              </v-container>
            </v-col>
          </v-row>
        </v-img>
      </template>

      <div class="section" id="about">
        <v-container>
          <v-row>
            <v-col md="6" lg="6" xl="6" sm="12" class="d-flex align-start">
              <div
                class="align-self-center"
                style="position: absolute; opacity: 0.4"
              >
                <div data-aos="zoom-out-down">
                  <h1 class="aboutMeRey" style="color: #000000 !important">
                    {
                  </h1>
                </div>
                <div data-aos="zoom-in-left">
                  <h1 class="aboutMeRey">
                    &nbsp; "<span class="redSpan">R</span>eynaldo
                  </h1>
                </div>
                <div data-aos="zoom-in-right">
                  <h1 class="aboutMeRey">
                    &nbsp; <span class="redSpan"> B</span>ichayda Jr."
                  </h1>
                </div>
                <h1 class="aboutMeRey"></h1>
                <div data-aos="zoom-out-down">
                  <h1 class="aboutMeRey" style="color: #000000 !important">
                    }
                  </h1>
                </div>
              </div>
            </v-col>

            <v-col
              md="6"
              lg="6"
              xl="6"
              sm="12"
              class="align-center text-center"
            >
              <div data-aos="flip-up">
                <kinesis-container>
                  <kinesis-element :strength="20" type="depth">
                    <v-avatar profile color="#ffffff" size="300">
                      <v-img
                        src="../public/img/self.jpg"
                        height="40vh"
                        width="40vh"
                      >
                      </v-img>
                    </v-avatar>
                  </kinesis-element>
                </kinesis-container>
              </div>

              <p class="aboutMeFont pt-10">
                "I'm a <span class="redSpan">web developer</span> with a focus
                on the <span class="redSpan">Laravel Vue,</span>
                but still exploring other technologies and frameworks that catch
                my interest! if you're looking for a developer to add to your
                team, I'd love to hear from you!"
              </p>
              <div style="width: 100%" @click="downloadResume()">
                <div
                  class="pt-10 d-flex dlCv"
                  data-aos="fade-down-right"
                  data-cursor-hover
                >
                  <v-icon color="red"> mdi-file-download-outline </v-icon>

                  <p
                    style="
                      font-family: MainFont;
                      font-weight: 500;
                      margin-block: auto;
                    "
                    class="dlPStyle"
                  >
                    Download CV
                  </p>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </div>

      <div style="background-color: #000000" class="section" id="backgrounds">
        <v-container>
          <v-row>
            <v-col cols="6">
              <kinesis-container>
                <center>
                  <div data-aos="fade-down-right">
                    <h1 style="color: grey" class="sectionTitle">
                      <span
                        class="redSpan1"
                        data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine"
                        >// </span
                      >Education
                    </h1>
                  </div>
                </center>

                <v-timeline dark align-top dense>
                  <v-timeline-item
                    data-aos="zoom-in-down"
                    icon="mdi-school-outline "
                    color="black"
                  >
                    <v-row class="pt-2">
                      <v-col class="pa-0">
                        <kinesis-element :strength="10">
                          <strong class="edTitle">College </strong>
                        </kinesis-element>

                        <div class="edSubTitle">
                          <a
                            href="https://cvsu.edu.ph/"
                            target="_blank"
                            style="text-decoration: none; color: white"
                            data-cursor-hover
                          >
                            <kinesis-element :strength="20">
                              <span class="redSpan1">Cav</span>ite
                              <span class="redSpan1">S</span>tate
                              <span class="redSpan1">U</span>niversity (Main)
                            </kinesis-element>
                          </a>
                        </div>
                      </v-col>
                    </v-row>
                  </v-timeline-item>

                  <v-timeline-item
                    data-aos="zoom-in-left"
                    icon="mdi-school-outline "
                    color="black"
                  >
                    <v-row class="pt-2">
                      <v-col class="pa-0">
                        <kinesis-element :strength="10">
                          <strong class="edTitle">High School</strong>
                        </kinesis-element>
                        <div class="edSubTitle">
                          <a
                            href="http://www.vcmc.yolasite.com/"
                            target="_blank"
                            style="text-decoration: none; color: white"
                            data-cursor-hover
                          >
                            <kinesis-element :strength="20">
                              <span class="redSpan1">V</span>ictorious
                              <span class="redSpan1">C</span>hristian
                              <span class="redSpan1">M</span>ontessori
                              <span class="redSpan1">C</span>ollege Inc.
                            </kinesis-element>
                          </a>
                        </div>
                      </v-col>
                    </v-row>
                  </v-timeline-item>

                  <v-timeline-item
                    data-aos="zoom-in-right"
                    icon="mdi-school-outline "
                    color="black"
                  >
                    <v-row class="pt-2">
                      <v-col class="pa-0">
                        <kinesis-element :strength="10">
                          <strong class="edTitle">Elementary</strong>
                        </kinesis-element>
                        <div class="edSubTitle">
                          <kinesis-element :strength="20">
                            <span class="redSpan1">S</span>inaliw
                            <span class="redSpan1">E</span>lementary
                            <span class="redSpan1">S</span>chool
                          </kinesis-element>
                        </div>
                      </v-col>
                    </v-row>
                  </v-timeline-item>
                </v-timeline>
              </kinesis-container>
            </v-col>

            <v-col cols="6" style="background-color: #000 !important">
              <kinesis-container>
                <center>
                  <div data-aos="fade-left">
                    <h1 style="color: grey" class="sectionTitle">
                      <span
                        class="redSpan1"
                        data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine"
                        >// </span
                      >My Skills
                    </h1>
                  </div>
                </center>
                <v-tabs
                  vertical
                  dark
                  slider-color="red"
                  background-color="#000"
                  class="pt-4"
                  d
                  ata-aos="fade-right"
                >
                  <v-tab class="pa-0" style="background-color: black">
                    <v-icon left data-aos="fade-right"> mdi-view-grid </v-icon>
                  </v-tab>
                  <v-tab class="pa-0" style="background-color: black">
                    <v-icon left data-aos="fade-right"> mdi-xml </v-icon>
                  </v-tab>
                  <v-tab-item style="background-color: black" dark>
                    <v-card flat dark color="#000">
                      <center>
                        <h3 data-aos="fade-right" class="edTitle">Front-End</h3>
                      </center>
                      <v-card-text class="pt-0">
                        <kinesis-element :strength="10" type="depth">
                          <template v-for="(item, index) in frontEndSkill">
                            <div :key="index + 'zzz'" data-aos="zoom-in-left">
                              <v-progress-linear
                                :value="item.percent"
                                stream
                                :buffer-value="item.percent"
                                color="#ff0000"
                                rounded
                                height="25"
                                class="pr-5 pl-5 mt-2"
                              >
                                <template v-slot:default="{ value }">
                                  <v-icon class="pl-2" color="black">
                                    {{ item.icon }}
                                  </v-icon>
                                  <h4
                                    style="
                                      color: black;
                                      font-family: MainFont;
                                      font-size: 14px;
                                    "
                                    class="pr-5 pl-1"
                                  >
                                    {{ item.skill }}
                                  </h4>
                                  <v-spacer />
                                  <strong class="pr-5"
                                    >{{ Math.ceil(value) }}%</strong
                                  >
                                </template>
                              </v-progress-linear>
                            </div>
                          </template>
                        </kinesis-element>
                      </v-card-text>
                    </v-card>
                  </v-tab-item>
                  <v-tab-item style="background-color: black" dark>
                    <v-card flat dark color="#000">
                      <center>
                        <h3 class="edTitle">Back-End</h3>
                      </center>
                      <v-card-text class="pt-0">
                        <kinesis-element :strength="10" type="depth">
                          <template v-for="(item, index) in backEndSkill">
                            <div :key="index + 'xxx'" data-aos="zoom-in-left">
                              <v-progress-linear
                                stream
                                :buffer-value="item.percent"
                                :value="item.percent"
                                color="#ff0000"
                                rounded
                                height="25"
                                class="pr-5 pl-5 mt-2"
                              >
                                <template v-slot:default="{ value }">
                                  <v-icon class="pl-2" color="black">
                                    {{ item.icon }}
                                  </v-icon>
                                  <h4
                                    style="
                                      color: black;
                                      font-family: MainFont;
                                      font-size: 14px;
                                    "
                                    class="pr-5 pl-1"
                                  >
                                    {{ item.skill }}
                                  </h4>
                                  <v-spacer />
                                  <strong class="pr-5"
                                    >{{ Math.ceil(value) }}%</strong
                                  >
                                </template>
                              </v-progress-linear>
                            </div>
                          </template>
                        </kinesis-element>
                      </v-card-text>
                    </v-card>
                  </v-tab-item>
                </v-tabs>
              </kinesis-container>
            </v-col>
          </v-row>
        </v-container>
      </div>

      <div class="section" id="exp">
        <v-container>
          <center>
            <div data-aos="fade-down-right" class="pb-10">
              <h1 style="color: grey" class="sectionTitle">
                <span
                  class="redSpan1"
                  data-aos="fade-right"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                  >// </span
                >experience
              </h1>
            </div>
          </center>
          <v-timeline>
            <v-timeline-item
              data-aos="fade-down"
              v-for="(item, index) in expData"
              :key="index + 'yyy'"
              large
            >
              <template v-slot:icon>
                <kinesis-container>
                  <kinesis-element :strength="10" type="depth">
                    <v-avatar color="black">
                      <v-img
                        :lazy-src="item.imgC"
                        max-height="40"
                        max-width="40"
                        :src="item.imgC"
                      >
                      </v-img>
                    </v-avatar>
                  </kinesis-element>
                </kinesis-container>
              </template>
              <template v-slot:opposite>
                <span style="font-family: NavFont">{{ item.span }}</span>
              </template>
              <kinesis-container>
                <kinesis-element :strength="10" type="depth">
                  <v-card class="elevation-5" data-aos="zoom-in-up">
                    <v-card-title
                      class="text-h5"
                      data-aos="fade-right"
                      data-aos-offset="300"
                      data-aos-easing="ease-in-sine"
                      ><span style="font-family: NavFont"
                        >{{ item.company }}
                      </span>
                    </v-card-title>
                    <v-card-subtitle class="pb-0">
                      <p style="font-family: NavFont">{{ item.location }}</p>
                    </v-card-subtitle>
                    <v-card-text
                      class="pt-0"
                      style="font-family: MainFont; word-spacing: -3px"
                    >
                      <h3 class="redSpan">
                        {{ item.position }}
                      </h3>
                      {{ item.details }}
                    </v-card-text>
                  </v-card>
                </kinesis-element>
              </kinesis-container>
            </v-timeline-item>
          </v-timeline>
        </v-container>
      </div>

      <div class="section" id="projects">
        <v-container>
          <v-col>
            <v-card class="pb-4 px-4" elevation="3">
              <v-card-title class="text-center justify-center py-6">
                <div data-aos="fade-down-right">
                  <h1 class="sectionTitle">
                    <span
                      class="redSpan1"
                      data-aos="fade-right"
                      data-aos-offset="300"
                      data-aos-easing="ease-in-sine"
                      >// </span
                    >projects
                  </h1>
                </div>
              </v-card-title>
              <v-tabs color="red" right>
                <v-tab>Landing Pages</v-tab>
                <v-tab>College Thesis</v-tab>
                <v-tab disabled>Other Projects</v-tab>

                <v-tab-item>
                  <v-container>
                    <v-row>
                      <v-col
                        v-for="(item, index) in landingPage"
                        :key="index + 'bbb'"
                        class="d-flex child-flex"
                        cols="4"
                      >
                        <v-hover v-slot="{ hover }" open-delay="200">
                          <kinesis-container>
                            <kinesis-element :strength="15" type="depth">
                              <v-card @click="showImage(item)">
                                <div
                                  v-if="hover"
                                  style="
                                    position: absolute;
                                    z-index: 2;
                                    bottom: 0;
                                    background-color: #0000004d;
                                    width: 100%;
                                    padding: 1vh 2vh;
                                    color: white;
                                    font-size: 2vh;
                                  "
                                >
                                  <h3>
                                    {{ item.name }}
                                  </h3>
                                  <p>
                                    {{ item.details }}
                                  </p>
                                </div>
                                <v-img
                                  max-height="50vh"
                                  :src="item.imgLink"
                                  :lazy-src="item.imgLink"
                                  aspect-ratio="1"
                                  class="grey lighten-2"
                                  style="border 2px solid black"
                                >
                                  <template v-slot:placeholder>
                                    <v-row
                                      class="fill-height ma-0"
                                      align="center"
                                      justify="center"
                                    >
                                      <v-progress-circular
                                        indeterminate
                                        color="grey lighten-5"
                                      ></v-progress-circular>
                                    </v-row>
                                  </template>
                                </v-img>
                              </v-card>
                            </kinesis-element>
                          </kinesis-container>
                        </v-hover>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-tab-item>

                <v-tab-item>
                  <v-row>
                    <v-col>
                      <v-carousel
                        continuous
                        cycle
                        height="100vh"
                        hide-delimiter-background
                        show-arrows-on-hover
                        interval="3000"
                      >
                        <v-carousel-item
                          v-for="(item, index) in thesisData"
                          :key="index + 'nnn'"
                        >
                          <v-sheet color="#000000ab" height="100%">
                            <v-row
                              class="fill-height"
                              align="center"
                              justify="center"
                            >
                              <div class="text-h2">
                                <v-img
                                  max-height="90vh"
                                  width="90vh"
                                  contain
                                  :src="item.imgLink"
                                  :lazy-src="item.imgLink"
                                >
                                </v-img>
                              </div>
                            </v-row>
                          </v-sheet>
                        </v-carousel-item>
                      </v-carousel>
                    </v-col>
                  </v-row>
                </v-tab-item>

                <v-tab-item>
                  <v-container>
                    <v-tabs vertical>
                      <v-tab style="justify-content: unset !important">
                        <v-icon left> mdi-alpha-e-box </v-icon>
                        Exterior System
                      </v-tab>
                      <v-tab style="justify-content: unset !important">
                        <v-icon left> mdi-alpha-i-box </v-icon>
                        Iconn System (Iconn Drive)
                      </v-tab>
                      <v-tab style="justify-content: unset !important">
                        <v-icon left> mdi-access-point </v-icon>
                        Option 3
                      </v-tab>

                      <v-tab-item>
                        <v-card flat>
                          <v-row>
                            <v-col
                              v-for="(item, index) in landingPage"
                              :key="index + 'bbb'"
                              class="d-flex child-flex"
                              cols="4"
                            >
                              <v-hover v-slot="{ hover }" open-delay="200">
                                <kinesis-container>
                                  <kinesis-element :strength="15" type="depth">
                                    <v-card @click="showImage(item)">
                                      <div
                                        v-if="hover"
                                        style="
                                          position: absolute;
                                          z-index: 2;
                                          bottom: 0;
                                          background-color: #0000004d;
                                          width: 100%;
                                          padding: 1vh 2vh;
                                          color: white;
                                          font-size: 2vh;
                                        "
                                      >
                                        <h3>
                                          {{ item.name }}
                                        </h3>
                                        <p>
                                          {{ item.details }}
                                        </p>
                                      </div>
                                      <v-img
                                        max-height="50vh"
                                        :src="item.imgLink"
                                        :lazy-src="item.imgLink"
                                        aspect-ratio="1"
                                        class="grey lighten-2"
                                        style="border 2px solid black"
                                      >
                                        <template v-slot:placeholder>
                                          <v-row
                                            class="fill-height ma-0"
                                            align="center"
                                            justify="center"
                                          >
                                            <v-progress-circular
                                              indeterminate
                                              color="grey lighten-5"
                                            ></v-progress-circular>
                                          </v-row>
                                        </template>
                                      </v-img>
                                    </v-card>
                                  </kinesis-element>
                                </kinesis-container>
                              </v-hover>
                            </v-col>
                          </v-row>
                        </v-card>
                      </v-tab-item>

                      <v-tab-item>
                        <v-card flat>
                          <v-card-text>
                            <p>
                              Morbi nec metus. Suspendisse faucibus, nunc et
                              pellentesque egestas, lacus ante convallis tellus,
                              vitae iaculis lacus elit id tortor. Sed mollis,
                              eros et ultrices tempus, mauris ipsum aliquam
                              libero, non adipiscing dolor urna a orci.
                              Curabitur ligula sapien, tincidunt non, euismod
                              vitae, posuere imperdiet, leo. Nunc sed turpis.
                            </p>

                            <p>
                              Suspendisse feugiat. Suspendisse faucibus, nunc et
                              pellentesque egestas, lacus ante convallis tellus,
                              vitae iaculis lacus elit id tortor. Proin viverra,
                              ligula sit amet ultrices semper, ligula arcu
                              tristique sapien, a accumsan nisi mauris ac eros.
                              In hac habitasse platea dictumst. Fusce ac felis
                              sit amet ligula pharetra condimentum.
                            </p>

                            <p>
                              Sed consequat, leo eget bibendum sodales, augue
                              velit cursus nunc, quis gravida magna mi a libero.
                              Nam commodo suscipit quam. In consectetuer turpis
                              ut velit. Sed cursus turpis vitae tortor. Aliquam
                              eu nunc.
                            </p>

                            <p>
                              Etiam ut purus mattis mauris sodales aliquam. Ut
                              varius tincidunt libero. Aenean viverra rhoncus
                              pede. Duis leo. Fusce fermentum odio nec arcu.
                            </p>

                            <p class="mb-0">
                              Donec venenatis vulputate lorem. Aenean viverra
                              rhoncus pede. In dui magna, posuere eget,
                              vestibulum et, tempor auctor, justo. Fusce commodo
                              aliquam arcu. Suspendisse enim turpis, dictum sed,
                              iaculis a, condimentum nec, nisi.
                            </p>
                          </v-card-text>
                        </v-card>
                      </v-tab-item>

                      <v-tab-item>
                        <v-card flat>
                          <v-card-text>
                            <p>
                              Fusce a quam. Phasellus nec sem in justo
                              pellentesque facilisis. Nam eget dui. Proin
                              viverra, ligula sit amet ultrices semper, ligula
                              arcu tristique sapien, a accumsan nisi mauris ac
                              eros. In dui magna, posuere eget, vestibulum et,
                              tempor auctor, justo.
                            </p>

                            <p class="mb-0">
                              Cras sagittis. Phasellus nec sem in justo
                              pellentesque facilisis. Proin sapien ipsum, porta
                              a, auctor quis, euismod ut, mi. Donec quam felis,
                              ultricies nec, pellentesque eu, pretium quis, sem.
                              Nam at tortor in tellus interdum sagittis.
                            </p>
                          </v-card-text>
                        </v-card>
                      </v-tab-item>
                    </v-tabs>
                  </v-container>
                </v-tab-item>
              </v-tabs>
            </v-card>
          </v-col>
        </v-container>
      </div>
      <div class="section" style="background-color: #000">
        <v-container>
          <v-row>
            <v-col>
              <div class="gmap">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13395.807785815861!2d120.82855626834099!3d14.123115110702274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd9cc4508a8d5d%3A0x22cb55d1948df487!2sSanta%20Teresa%2C%20Alfonso%2C%20Cavite!5e0!3m2!1sen!2sph!4v1675514034992!5m2!1sen!2sph"
                  width="600"
                  height="450"
                  style="border: 0"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                >
                </iframe>
              </div>
            </v-col>
            <v-col>
              <v-row class="d-block text-center">
                <v-col class="pb-0">
                  <v-img
                    class="ma-auto"
                    lazy-src="../public/img/self.png"
                    max-height="10vh"
                    max-width="10vh"
                    src="../public/img/self.png"
                  >
                  </v-img>
                </v-col>
                <v-col style="color: white" class="pt-0">
                  <h1 style="font-family: NavFont; letter-spacing: 2px">
                    Rey Bichayda
                  </h1>
                </v-col>
              </v-row>
              <v-row style="color: white">
                <v-col>
                  <p class="ma-0" style="font-size: 1.4vh">
                    I always look for passionate people to work with,
                  </p>
                  <p style="font-size: 1.4vh">Let's get in touch.</p>
                </v-col>
              </v-row>
              <v-row style="color: white">
                <v-col>
                  <h1>reybichayda@gmail.com</h1>
                </v-col>
              </v-row>
              <div class="mt-3" data-aos="zoom-in-left">
                <a>
                  <v-icon color="#f503b9" data-cursor-hover class="mr-2">
                    mdi-instagram
                  </v-icon>
                </a>
                <a>
                  <v-icon color="#4867aa" data-cursor-hover class="mr-2">
                    mdi-facebook
                  </v-icon>
                </a>
                <a>
                  <v-icon color="#1da1f2" data-cursor-hover>
                    mdi-twitter
                  </v-icon>
                </a>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </div>
      <div style="background-color: #000000; padding: 5px 20px">
        <p style="color: white; font-size: 15px" class="ma-0">
          ©<span style="color: white; font-size: 13px">
            2023 by Reynaldo P. Bichayd Jr.</span
          >
        </p>
      </div>

      <v-dialog v-model="togglShowImageDialog" width="80vh" persistent>
        <v-card height="100%">
          <v-toolbar dense elevation="0" class="px-3" color="#000">
            <v-toolbar-title
              style="font-size: 2vh; font-family: MainFont; color: white"
              ><span class="redSpan">{</span> {{ showImageData.name }}
              <span class="redSpan">}</span></v-toolbar-title
            >
            <v-spacer />
            <v-btn icon color="red" small @click="closeImageDialog()">
              <v-icon> mdi-close </v-icon>
            </v-btn>
          </v-toolbar>
          <div
            style="max-height: 70vh; overflow: auto; padding: 0px 2vh 2vh 2vh"
            id="dialogImg"
          >
            <v-img
              :src="showImageData.imgLink"
              :lazy-src="showImageData.imgLink"
            >
            </v-img>
          </div>
        </v-card>
      </v-dialog>
    </v-card>
    <!-- <v-dialog v-model="dialog" width="100%">
        <v-btn color="primary" dark slot="activator">Open Dialog</v-btn>
          <v-card>
            <h1>test</h1>
          <CANVAS src="../public/projects/Template3/indexT3.html"></CANVAS>
          </v-card>
        </v-dialog> -->
    <cursor-fx
      color="#FF2511"
      color-hover="#f1c40f"
      shape="square"
      outside-size="30px"
      delay="70"
    >
      <!-- :config="BASE_CONFIG" -->
    </cursor-fx>
  </v-app>
</template>

<script>
import { KinesisContainer, KinesisElement } from "vue-kinesis";
import axios from "axios";

export default {
  name: "App",
  components: {
    "kinesis-container": KinesisContainer,
    "kinesis-element": KinesisElement,
  },

  data: () => ({
    drawer: true,
    items: [
      { title: "Home", icon: "mdi-home-city" },
      { title: "My Account", icon: "mdi-account" },
      { title: "Users", icon: "mdi-account-group-outline" },
    ],
    mini: true,
    // BASE_CONFIG: {
    //   lerps: {
    //     dot: 1,
    //     circle: 1,
    //     custom: 1,
    //   },
    //   scale: {
    //     ratio: 0.18,
    //     min: 0.5,
    //     max: 1,
    //   },
    //   opacity: 1,
    //   color: "#000000",
    // },
    navTexts: [
      { text: "Home", link: "#home" },
      { text: "About", link: "#about" },
      { text: "Backgrounds", link: "#backgrounds" },
      { text: "experience", link: "#exp" },
      { text: "Projects", link: "#projects" },
      { text: "Contact", link: "#contact" },
    ],
    windowTop: 0,
    position: 0,
    frontEndSkill: [
      { skill: "CSS", percent: 70, icon: "mdi-language-css3" },
      { skill: "HTML", percent: 80, icon: "mdi-language-html5" },
      { skill: "Vue.js", percent: 90, icon: "mdi-vuejs" },
      { skill: "Vuetify", percent: 90, icon: "mdi-vuetify" },
      { skill: "JavaScript", percent: 80, icon: "mdi-language-javascript" },
      { skill: "JQuery", percent: 50, icon: "mdi-jquery" },
      { skill: "Bootstrap", percent: 60, icon: "mdi-bootstrap " },
    ],
    backEndSkill: [
      { skill: "Laravel", percent: 80, icon: "mdi-laravel" },
      { skill: "PHP", percent: 70, icon: "mdi-language-php" },
      { skill: "MySQL", percent: 80, icon: "mdi-database" },
      { skill: "Apache", percent: 60, icon: "mdi-feather" },
    ],
    expData: [
      {
        company: "HRD Singapore Pte., Ltd",
        location: "Lot 7 Blk. 9, Ph.1, Cavite Economic Zone, Rosario, Cavite",
        position: "Office Staff (Full Stack Web Developer)",
        details:
          "I worked as a Full Stack Developer, planning, creating, deploying, maintaining, company systems, We used Laravel SPA with Vue, Vuetify as Front-End.",
        span: "April 6, 2022 - Present",
        imgC: "../img/hrd.png",
      },
      {
        company: "Electro Trade LLC",
        location: "2244 Faraday Ave Carlsbad, CA, 92008-7208 United States",
        position: "Data Processor (Freelance)",
        details:
          "I maked company's documents such as Invoices, Purchase Orders, Packing List docs, and etc.",
        span: "March 2021 - February 2022",
        imgC: "../img/electro.jpg",
      },
      {
        company: "Alta Philippines I.T. Solution and Web Page Design Inc.",
        location:
          "Cluster J 2nd Floor Unit 154 Edsa Exit Cor. Macapagal Blvd. Metro Park Bay Area CBD. Pasay City",
        position: "Web Developer (Intern)",
        details:
          "I worked as a Fron-End Web Developer, creating a responsive Landing Page for our client using (HTML, CSS, WordPress, JQuery, and JavaScript)",
        span: "June - August 2019",
        imgC: "../img/alta.jpg",
      },
    ],
    dialog: true,
    landingPage: [
      {
        name: "Spa Webpage",
        details:
          "A responsive web page made from (HTML, CSS, JavaScript), only template because this is not deployed online",
        imgLink: "../img/landing_page/spa.jpg",
      },
      {
        name: "Truck Webpage",
        details:
          "A responsive web page made from (HTML, CSS, JavaScript), only template because this is not deployed online",
        imgLink: "../img/landing_page/truck.jpg",
      },
      {
        name: "Wedding Webpage",
        details:
          "A responsive web page made from (HTML, CSS, JavaScript), only template because this is not deployed online",
        imgLink: "../img/landing_page/wedding.jpg",
      },
      {
        name: "Restaurant Webpage",
        details:
          "A responsive web page made from (HTML, CSS, JavaScript), only template because this is not deployed online",
        imgLink: "../img/landing_page/resto.jpg",
      },
    ],
    togglShowImageDialog: false,
    showImageData: {},
    thesisData: [
      {
        name: "Home Page",
        imgLink: "../img/thesis_website/1.jpg",
      },
      {
        name: "Tourism Page",
        imgLink: "../img/thesis_website/2.jpg",
      },
      {
        name: "Procurement Page",
        imgLink: "../img/thesis_website/3.jpg",
      },
      {
        name: "Business Permit Dialog",
        imgLink: "../img/thesis_website/4.jpg",
      },
      {
        name: "Services Page",
        imgLink: "../img/thesis_website/5.jpg",
      },
      {
        name: "Ordinaces Page",
        imgLink: "../img/thesis_website/6.jpg",
      },
      {
        name: "Procurement BIdding",
        imgLink: "../img/thesis_website/7.jpg",
      },
      {
        name: "About Page",
        imgLink: "../img/thesis_website/8.jpg",
      },
      {
        name: "Admin Dashboard",
        imgLink: "../img/thesis_website/9.jpg",
      },
      {
        name: "Admin Accounts",
        imgLink: "../img/thesis_website/10.jpg",
      },
      {
        name: "Admin Ordinance",
        imgLink: "../img/thesis_website/11.jpg",
      },
      {
        name: "Admin Users",
        imgLink: "../img/thesis_website/12.jpg",
      },
    ],
    exteriorData: [
      {
        name: "Spa Webpage",
        details:
          "A responsive web page made from (HTML, CSS, JavaScript), only template because this is not deployed online",
        imgLink: "../img/landing_page/spa.jpg",
      },
    ],
  }),

  mounted() {
    setInterval(() => {
      this.position = this.position === 0 ? 100 : 0;
    }, 1000);
    window.addEventListener("scroll", this.onScroll);
  },

  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },

  methods: {
    onScroll(e) {
      this.windowTop = e.target.documentElement.scrollTop;
    },
    showImage(item) {
      this.togglShowImageDialog = true;
      // [0].scrollTop = 0
      this.showImageData = item;
    },
    closeImageDialog() {
      document.getElementById("dialogImg").scrollTop = 0;
      this.togglShowImageDialog = false;
      this.showImageData = {};
    },
    downloadResume() {
      // console.log(axios.isCancel("something"));
      axios({
        url: `${window.location.origin}/resume/REYSUME.pdf`,
        method: "GET",
        responseType: "blob",
      }).then(({ data }) => {
        const url = window.URL.createObjectURL(new Blob([data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "ReyResume.pdf");
        document.body.appendChild(link);
        link.click();
      });
    },
  },
};
</script>
<style scoped>
@import "./media.scss";
@font-face {
  font-family: NavFont;
  src: url("../public/font/BebasNeue-Regular.ttf");
}

@font-face {
  font-family: MainFont;
  src: url("../public/font/FiraCode-VariableFont_wght.ttf");
}

html {
  scroll-behavior: smooth;
  -webkit-scroll-behavior: smooth;
}
body {
  margin: 0;
}
.section {
  padding: 40px 0px !important;
}
.navCss {
  font-family: NavFont;
  font-size: 20px !important;
  color: #ffffff;
}
.navMain {
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;
  transition-delay: 5ms;
  background-color: #0c0102 !important;
}

.homeFont {
  font-weight: 500;
  margin-bottom: 0px !important;
  line-height: initial;
  word-spacing: -10px;
  font-family: MainFont;
  font-size: 50px !important;
  color: #ffffff;
}
.homeFontSub {
  word-spacing: -10px;
  font-family: MainFont;
  margin-bottom: 0px !important;
  font-size: 30px !important;
  font-weight: 500;
}
.aboutMeFont {
  font-weight: 500;
  margin-bottom: 0px !important;
  line-height: initial;
  word-spacing: 0px;
  font-family: MainFont;
  font-size: 22px !important;
  color: #000000;
}
.redSpan {
  color: red !important;
}
.redSpan1 {
  font-weight: bolder;
  color: red !important;
}
.aboutMeRey {
  font-weight: 900;
  margin-bottom: 0px !important;
  line-height: initial;
  word-spacing: 0px;
  font-family: MainFont;
  font-size: 100px !important;
  color: #00000059;
}
.edTitle {
  font-family: NavFont;
  font-size: 20px !important;
  color: #ffffff;
}

.edSubTitle {
  font-family: MainFont;
  color: #ffffff;
}
.sectionTitle {
  font-family: NavFont;
  font-size: 30px !important;
}
.theme--dark.v-tabs > .v-tabs-bar {
  background-color: #000000 !important;
}

.dlCv {
  width: max-content;
  margin: auto;
}
/* .dlCv:hover {
  transform-origin: 0% 50%;
} */
.dlCv p {
  display: inline-block;
}
.dlCv p:after {
  display: block;
  content: "";
  border-bottom: solid 2px #f44336;
  transform: scaleX(0);
  transition: transform 250ms ease-in-out;
}
.dlCv p.dlPStyle:after {
  transform-origin: 100% 50%;
}
.dlCv p.dlPStyle:hover:after {
  transform: scaleX(1);
  transform-origin: 0% 50%;
}

.gmap {
  text-align: center;
}


/* p.dlPStyle {
  --border-color: purple;
  --border-width: 5px;
  --bottom-distance: 0px;

  color: #666;
  display: inline-block;
  background-image: linear-gradient(var(--border-color), var(--border-color));
  background-size: 0% var(--border-width);
  background-repeat: no-repeat;
  transition: background-size 0.3s;
  margin: 5px 0;
}
.dlPStyle {
  background-position: 100% calc(100% - var(--bottom-distance));
} */
</style>
