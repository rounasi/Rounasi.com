(function () {
    "use strict";

    var
        // jQuery Objects
        $doc = $(document),
        $win = $(window),
        $pageHeader = $("#page-header"),
        $parallaxViewport = $("#parallaxViewport"),
        $footer = $("#footer"),
        $bottle = $('#bottle'),
        $bottleImg = $('#bottle img'),
        $firstImg = $('.first .athlete'),
        $firstCopy = $('.first .copy'),
        $secondImg = $('.second .athlete'),
        $secondCopy = $('.second .copy'),
        $thirdImg = $('.third .athlete'),
        $thirdCopy = $('.third .copy'),
        $fourthImg = $('.fourth .athlete'),
        $fourthCopy = $('.fourth .copy'),
        $fifthImg = $('.fifth .athlete'),
        $fifthCopy = $('.fifth .copy'),
        $sixthImg = $('.sixth .athlete'),
        $sixthCopy = $('.sixth .copy'),
        $carousel = $('.carousel'),
        $carouselDataPosition0 = $('.carousel li[data-position="0"]'),
        $carouselDataPosition0Section = $('.carousel li[data-position="0"] section'),
        $carouselDataPosition0Img = $('.carousel li[data-position="0"] img'),
        $carouselDataPosition1 = $('.carousel li[data-position="1"]'),
        $carouselDataPosition1Section = $('.carousel li[data-position="1"] section'),
        $carouselDataPosition1Img = $('.carousel li[data-position="1"] img'),
        $carouselDataPosition2 = $('.carousel li[data-position="2"]'),
        $carouselDataPosition2Section = $('.carousel li[data-position="2"] section'),
        $carouselDataPosition2Img = $('.carousel li[data-position="2"] img'),

        STATES = {
            0: [
                {
                    selector: ".strength",
                    css: [
                        {opacity: 0, filterBlur: "25px", scale: 0.75},
                        {opacity: 1, filterBlur: "0px", scale: 1},
                        {opacity: 1, filterBlur: "0px", scale: 1}
                    ],
                    speed: [2, 2, 2],
                    ease: "Power2.easeOut"
                }
            ],
            1: [
                {
                    selector: ".first .athlete",
                    css: [
                        {
                            left: function () {
                                return ($firstImg.width() * -1) + "px";
                            }
                        },
                        {
                            left: function () {
                                if ($win.width() < 480) {
                                    return ($win.width() * 0.5) - ($firstImg.width() * 0.35) + "px";
                                } else {
                                    return ($win.width() * 0.5) - ($firstImg.width() * 0.65) + "px";
                                }
                            },
                            delay: 0.5
                        },
                        {left: "100%"}
                    ],
                    speed: []
                },
                {
                    selector: "#downArrow",
                    css: [
                        {opacity: 0, bottom: "-48px", className:'+=start'},
                        {opacity: 1, bottom: "0", className:'+=start', delay: 1.5},
                        {opacity: 1, bottom: "0", className:'-=start'}
                    ],
                    speed: [0.5, 0.5, 0.5],
                    ease: "Power2.easeOut"
                },
                {
                    selector: ".first .copy",
                    css: [
                        {
                            left: function () {
                                if ($win.width() < 480) {
                                    return -$(".first .copy").width() + "px";
                                } else {
                                    return ($firstImg.width() * 0) + "px";
                                }
                            },
                            opacity: 0
                        },
                        {
                            left: function () {
                                if ($win.width() < 480) {
                                    return "0%";
                                    // return $win.width() - $firstCopy.width() - 20 + "px";
                                } else {
                                    return ($win.width() / 2) - ($firstImg.width() * 0.1) + "px";
                                }
                            },
                            opacity: 1,
                            delay: 1
                        },
                        {
                            left: function () {
                                if ($win.width() < 480) {
                                    return "100%";
                                } else {
                                    return ($firstImg.width() * 1) + "px";
                                }
                            },
                            opacity: 0
                        }
                    ],
                    speed: [0.5, 1, 0.5]
                },
                {
                    selector: "#bottle",
                    css: [
                        {bottom: "-100%"},
                        {bottom: "0%", delay: 0.5},
                        {bottom: "0%"}
                    ],
                    speed: [0.5, 0.5, 0.5]
                }
            ],
            2: [
                {
                    selector: ".second .athlete",
                    css: [
                        {right: function () { return ($secondImg.width() * -1) + "px";}},
                        {
                            right: function () {
                                if ($win.width() < 880) {
                                    return ($secondImg.width() / -3) + "px";
                                } else {
                                    if ($win.height() < 480) {
                                        return ($secondImg.width() * 0.5) + "px";
                                    } else {
                                        return ($win.width() / 2) - ($secondImg.width() * 0.57) + "px";
                                    }
                                }
                            },
                            delay: 0.5
                        },
                        {right: "100%"}
                    ],
                    speed: []
                },
                {
                    selector: ".second .copy",
                    css: [
                        {
                            right: function () {
                                if ($win.width() < 880) {
                                    return "0px";
                                } else {
                                    return ($secondImg.width() * 0.35) + "px";
                                }
                            },
                            opacity: 0
                        },
                        {
                            right: function () {
                                if ($win.width() < 880) {
                                    return ($win.width() - $('.second .copy').width() - 20) + "px";
                                } else {
                                    if ($win.height() < 480) {
                                        return ($secondImg.width() * 1.15) + "px";
                                    } else {
                                        return ($win.width() / 2) + ($secondImg.width() * 0.05) + "px";
                                    }
                                }
                            },
                            opacity: 1,
                            delay: 1
                        },
                        {
                            right: function () {
                                if ($win.width() < 880) {
                                    return ($win.width() + $('.second .copy').width() - 10) + "px";
                                } else {
                                    return ($secondImg.width() * 0.95) + "px";
                                }
                            },
                            opacity: 0
                        }
                    ],
                    speed: [0.5, 1, 0.5]
                }
            ],
            3: [
                {
                    selector: ".third .athlete",
                    css: [
                        {
                            right: function () {
                                return -$thirdImg.width() + "px";
                            }
                        },
                        {
                            right: function () {
                                if ($win.width() < 480) {
                                    // return -($thirdImg.width() * 0.18) + "px";
                                    return ($win.width() / 2) - ($thirdImg.width() * 0.5) + "px";
                                } else {
                                    return ($win.width() / 2) - ($thirdImg.width() * 0.25) + "px";
                                }
                            },
                            delay: 0.5
                        },
                        {right: "100%"}
                    ],
                    speed: []
                },
                {
                    selector: ".third .copy",
                    css: [
                        {
                            right: function () {
                                return $thirdImg.width() + "px";
                            },
                            top: function () {
                                return $('#headlines').position().top - ($(".third .copy").height() * 2) + "px";
                            },
                            opacity: 0
                        },
                        {
                            right: function () {
                                if ($win.width() < 830 && $win.width() >= 768) {
                                    return ($win.width() / 2) - ($thirdImg.width() * 0.24) - $(".third .copy").width() + "px";
                                } else {
                                    return ($win.width() / 2) - ($thirdImg.width() * 0.25) - 20 - $(".third .copy").width() + "px";
                                }
                            },
                            top: function () {
                                return $('#headlines').position().top - ($(".third .copy").height() * 2) + "px";
                            },
                            opacity: 1,
                            delay: 1,
                            fontSize: function () {
                                return Math.min(($win.height() * 0.06), 37) + "px";
                            }
                        },
                        {
                            right: function () {
                                return ($thirdImg.width() * 3.2) + "px";
                            },
                            top: function () {
                                return $('#headlines').position().top - ($(".third .copy").height() * 2) + "px";
                            },
                            opacity: 0
                        }
                    ],
                    speed: [0.5, 1, 0.5]
                },
                {
                    selector: ".third #snow1",
                    css: [
                        {
                            right: function () {
                                return ($win.width() / 2) - ($thirdImg.width() * 0.5) + "px";
                            },
                            top: "5%",
                            opacity: 0,
                            delay: 0,
                            rotation: "-10deg"
                        },
                        {
                            right: function () {
                                if ($win.width() < 480) {
                                    // return -($thirdImg.width() * 0.22) + "px";
                                    return ($win.width() / 2) - ($thirdImg.width() * 0.6) + "px";
                                } else {
                                    return ($win.width() / 2) - ($thirdImg.width() * 0.3) + "px";
                                }
                            },
                            top: "15%",
                            opacity: 1,
                            delay: 1.25,
                            rotation: "0deg"
                        },
                        {
                            right: function () {
                                return ($win.width() / 2) - ($thirdImg.width() * 0.2) + "px";
                            },
                            top: "25%",
                            opacity: 0,
                            delay: 0,
                            rotation: "10deg"
                        }
                    ],
                    speed: [0.25, 0.5, 0.25],
                    ease: "Power2.easeOut"
                }
            ],
            4: [
                {
                    selector: ".fourth .athlete",
                    css: [
                        {
                            left: function () {
                                return ($fourthImg.width() * -1) + "px";
                            }
                        },
                        {
                            left: function () {
                                if ($win.width() < 380) {
                                    return ($win.width() / 2) - ($fourthImg.width() * 0.25) + "px";
                                } else if ($win.width() >= 380 && $win.width() < 1150) {
                                    return "10px";
                                } else {
                                    return ($win.width() / 2) - ($fourthImg.width() * 0.65) + "px";
                                }
                            },
                            delay: 0.5
                        },
                        {
                            left: function () {
                                return "100%";
                            }
                        }
                    ],
                    speed: []
                },
                {
                    selector: ".fourth .copy",
                    css: [
                        {
                            left: function () {
                                return -$fourthCopy.width() + "px";
                            },
                            opacity: 0
                        },
                        {
                            left: function () {
                                if ($win.width() < 380) {
                                    return ($win.width() / 2) - ($fourthImg.width() * 0.25) + "px";
                                } else if ($win.width() >= 380 && $win.width() < 1150) {
                                    return 10 + ($fourthImg.width() * 0.45) + "px";
                                } else {
                                    return ($win.width() / 2) - ($fourthImg.width() * 0.15) + "px";
                                }
                            },
                            opacity: 1,
                            delay: 1
                        },
                        {
                            left: function () {
                                return "100%"
                            },
                            opacity: 0
                        }
                    ],
                    speed: [0.5, 1, 0.5]
                },
                {
                    selector: ".fourth #sweat1",
                    css: [
                        {
                            left: function () {
                                return ($win.width() / 2) - ($fourthImg.width() * 0.4) + "px";
                            },
                            opacity: 0,
                            delay: 0,
                            rotation: "0deg"
                        },
                        {
                            left: function () {
                                if ($win.width() < 380) {
                                    return ($win.width() / 2) - ($fourthImg.width() * -0.1) + "px";
                                } else if ($win.width() >= 380 && $win.width() < 1150) {
                                    return $fourthImg.width() * 0.35;
                                } else {
                                    return ($win.width() / 2) - ($fourthImg.width() * 0.3) + "px";
                                }
                            },
                            opacity: 1,
                            delay: 1,
                            rotation: "-10deg"
                        },
                        {
                            left: function () {
                                return ($win.width() / 2) - ($fourthImg.width() * -0.4) + "px";
                            },
                            opacity: 0,
                            delay: 0,
                            rotation: "-20deg"
                        }
                    ],
                    speed: [0.25, 0.75, 0.25],
                    ease: "Power1.easeOut"
                },
                {
                    selector: ".fourth #sweat2",
                    css: [
                        {
                            left: function () {
                                return ($win.width() / 2) - ($fourthImg.width() * 0.2) + "px";
                            },
                            opacity: 0,
                            delay: 0
                        },
                        {
                            left: function () {
                                if ($win.width() < 380) {
                                    return ($win.width() / 2) - ($fourthImg.width() * 0.45) + "px";
                                } else if ($win.width() >= 380 && $win.width() < 1150) {
                                    return $fourthImg.width() * -0.2;
                                } else {
                                    return ($win.width() / 2) - ($fourthImg.width() * 0.85) + "px";
                                }
                            },
                            opacity: 1,
                            delay: 1
                        },
                        {
                            left: function () {
                                return ($win.width() / 2) - ($fourthImg.width() * 0.8) + "px";
                            },
                            opacity: 0,
                            delay: 0
                        }
                    ],
                    speed: [0.25, 0.75, 0.25],
                    ease: "Power1.easeOut"
                }
            ],
            5: [
                {
                    selector: ".fifth .athlete",
                    css: [
                        {left: "100%"},
                        {
                            left: function () {
                                if ($win.width() < 880) {
                                    return ($win.width() / 2) - ($fifthImg.width() * 0.53) + "px";
                                } else {
                                    if ($win.height() < 600) {
                                        return ($win.width() / 2) - ($fifthImg.width() * 0.53) + "px";
                                    } else {
                                        return ($win.width() / 2) - ($fifthImg.width() * 0.53) + "px";
                                    }
                                }
                            },
                            delay: 0.5
                        },
                        {
                            left: function () {
                                return ($fifthImg.width() * -1) + "px";
                            }
                        }
                    ],
                    speed: []
                },
                {
                    selector: ".fifth .copy",
                    css: [
                        {
                            left: function () {
                                return ($win.width() / 2) - ($fifthImg.width() * 0.2) + "px";
                            },
                            top: function () {
                                if ($win.height() <= 768) {
                                    return $('#headlines').position().top + $('#headlines').height() + 10 + "px";
                                } else {
                                    return "35%";
                                }
                            },
                            opacity: 0
                        },
                        {
                            left: function () {
                                if ($win.width() < 880) {
                                    return "30px";
                                } else {
                                    if ($win.height() < 600) {
                                        return ($win.width() / 2) - ($fifthCopy.width() * 1.6) + "px";
                                    } else {
                                        return ($win.width() / 2) - ($fifthCopy.width() * 1.6) + "px";
                                    }
                                }
                            },
                            top: function () {
                                if ($win.height() <= 768) {
                                    return $('#headlines').position().top + $('#headlines').height() + 10 + "px";
                                } else {
                                    return "35%";
                                }
                            },
                            opacity: 1,
                            delay: 1
                        },
                        {
                            left: function () {
                                return ($win.width() / 2) - ($fifthImg.width() * 0.8) + "px";
                            },
                            top: function () {
                                if ($win.height() <= 768) {
                                    return $('#headlines').position().top + $('#headlines').height() + 10 + "px";
                                } else {
                                    return "35%";
                                }
                            },
                            opacity: 0
                        }
                    ],
                    speed: [0.5, 1, 0.5]
                }
            ],
            6: [
                {
                    selector: ".sixth .athlete",
                    css: [
                        {
                            left: function () {
                                return -$sixthImg.width() + "px";
                            }
                        },
                        {
                            left: function () {
                                if ($win.width() < 880) {
                                    return ($win.width() / 2) - ($sixthImg.width() * 0.65) + "px";
                                } else {
                                    return ($win.width() / 2) - ($sixthImg.width() * 0.85) + "px";
                                }
                            },
                            delay: 0.5
                        },
                        {left: "100%"}
                    ],
                    speed: []
                },
                {
                    selector: ".sixth .copy",
                    css: [
                        {
                            left: function () {
                                return -$sixthCopy.width() + "px";
                            },
                            top: function () {
                                return $('#headlines').position().top + $('#headlines').height() + 10 + "px";
                            },
                            opacity: 0
                        },
                        {
                            left: function () {
                                if ($win.width() < 880) {
                                    return ($win.width() / 2) + ($sixthImg.width() * 0.2) + "px";
                                } else {
                                    return ($win.width() / 2) + 50 + "px";
                                }
                            },
                            top: function () {
                                
                                var position = $('#headlines').position();
                                if(position) {
                                    return $('#headlines').position().top + $('#headlines').height() + 10 + "px";                                    
                                } else {
                                    return '0px';                                                                
                                }                                

                            },
                            opacity: 1,
                            delay: 1
                        },
                        {
                            left: "100%",
                            top: function () {

                                var position = $('#headlines').position();
                                if(position) {
                                    return $('#headlines').position().top + $('#headlines').height() + 10 + "px";                                    
                                } else {
                                    return '0px';                                                                
                                }
                                
                            },
                            opacity: 0
                        }
                    ],
                    speed: [0.5, 1, 0.5]
                },
                {
                    selector: ".sixth #smoke1",
                    css: [
                        {
                            left: function () {
                                return ($win.width() / 2) - ($sixthImg.width() * 0.85) + "px";
                            },
                            opacity: 0,
                            delay: 0
                        },
                        {
                            left: function () {
                                return ($win.width() / 2) - ($sixthImg.width() * 1.05) + "px";
                            },
                            opacity: 1,
                            delay: 1
                        },
                        {
                            left: function () {
                                return ($win.width() / 2) - ($sixthImg.width() * 1.25) + "px";
                            },
                            opacity: 0,
                            delay: 0
                        }
                    ],
                    speed: [0.25, 0.5, 0.25],
                    ease: "Power1.easeOut"
                }
            ],
            7: [
                {
                    selector: ".win",
                    css: [
                        {
                            opacity: 0,
                            scale: 0.75
                        },
                        {
                            opacity: 1,
                            scale: 1,
                            delay: 0.5
                        },
                        {
                            opacity: 0,
                            scale: 0.75
                        }
                    ],
                    speed: [1, 1, 1],
                    ease: "Power2.easeOut"
                }
            ],
            8: [
                {
                    selector: ".strength",
                    css: [
                        {opacity: 1, scale: 1},
                        {opacity: 0, scale: 0.75},
                        {opacity: 0, scale: 0.75}
                    ],
                    speed: [1, 1, 1],
                    ease: "Power2.easeOut"
                },
                {
                    selector: "#downArrow",
                    css: [
                        {opacity: 1, bottom: 0},
                        {opacity: 0, bottom: "-48px"},
                        {opacity: 0, bottom: "-48px"}
                    ],
                    speed: [0.5, 0.5, 0.5],
                    ease: "Power2.easeOut"
                },
                {
                    selector: "#leftArrow",
                    css: [
                        {opacity: 0, left: "-39px"},
                        {opacity: 1, left: 0},
                        {opacity: 1, left: 0}
                    ],
                    speed: [0.5, 0.5, 0.5],
                    ease: "Power2.easeOut"
                },
                {
                    selector: "#rightArrow",
                    css: [
                        {opacity: 0, right: "-39px"},
                        {opacity: 1, right: 0},
                        {opacity: 1, right: 0}
                    ],
                    speed: [0.5, 0.5, 0.5],
                    ease: "Power2.easeOut"
                },
                {
                    selector: "#bottle",
                    css: [
                        {bottom: "0%", delay: 0.5},
                        {bottom: "-100%"},
                        {bottom: "-100%"}
                    ],
                    speed: [0.5, 0.5, 0.5]
                },
                {
                    selector: ".carousel",
                    css: [
                        {
                            opacity: 0,
                            top: "200%",
                            width: function () {
                                if ($win.width() < 853) {
                                    return $win.width();
                                } else {
                                    return "853px";
                                }
                            }
                        },
                        {   
                            opacity: 1,
                            top: function () {
                                if ($win.width() < 853) {
                                    return "50px";
                                } else {
                                    return "50%";
                                }
                            },
                            width: function () {
                                if ($win.width() < 853) {
                                    return $win.width();
                                } else {
                                    return "853px";
                                }
                            }
                        },
                        {
                            opacity: 1,
                            top: function () {
                                if ($win.width() < 853) {
                                    return "50px";
                                } else {
                                    return "50%";
                                }
                            },
                            width: function () {
                                if ($win.width() < 853) {
                                    return $win.width();
                                } else {
                                    return "853px";
                                }
                            }
                        }
                    ],
                    speed: [1, 1, 1],
                    ease: "Power2.easeOut"
                },
                {
                    selector: '.carousel li[data-position="0"]',
                    css: [
                        {
                            left: 0,
                            opacity: 0,
                            width: function () {
                                if ($win.width() < 853) {
                                    return $win.width();
                                } else {
                                    return "853px";
                                }
                            }
                        },
                        {
                            left: 0,
                            opacity: 1,
                            width: function () {
                                if ($win.width() < 853) {
                                    return $win.width();
                                } else {
                                    return "853px";
                                }
                            }
                        },
                        {
                            left: function () {
                                if ($win.width() < 853) {
                                    return -$win.width();
                                } else {
                                    // return "-853px";
                                    // return -$carouselDataPosition0.width() + "px";
                                    return -$win.width();
                                }
                            },
                            opacity: 0,
                            width: function () {
                                if ($win.width() < 853) {
                                    return $win.width();
                                } else {
                                    return "853px";
                                }
                            }
                        }
                    ],
                    speed: [1, 1, 1],
                    ease: "Power2.easeOut"
                },
                {
                    selector: '.carousel li[data-position="0"] section',
                    css: [
                        {
                            top: function () {
                                if ($win.width() < 853) {
                                    return "0px";
                                } else {
                                    return (($carouselDataPosition0.height() - $carouselDataPosition0Section.height()) / 2 + "px");
                                }
                            }
                        },
                        {
                            top: function () {
                                if ($win.width() < 853) {
                                    return "0px";
                                } else {
                                    return (($carouselDataPosition0.height() - $carouselDataPosition0Section.height()) / 2 + "px");
                                }
                            }
                        },
                        {
                            top: function () {
                                if ($win.width() < 853) {
                                    return "0px";
                                } else {
                                    return (($carouselDataPosition0.height() - $carouselDataPosition0Section.height()) / 2 + "px");
                                }
                            }
                        }
                    ],
                    speed: [0, 0, 0],
                    ease: "Power2.easeOut"
                },
                {
                    selector: '.carousel li[data-position="0"] img',
                    css: [
                        {
                            marginTop: function () {
                                if ($win.width() < 853) {
                                    return "0px";
                                } else {
                                    return (($carouselDataPosition0.height() - $carouselDataPosition0Img.height()) / 2 + "px");
                                }
                            }
                        },
                        {
                            marginTop: function () {
                                if ($win.width() < 853) {
                                    return "0px";
                                } else {
                                    return (($carouselDataPosition0.height() - $carouselDataPosition0Img.height()) / 2 + "px");
                                }
                            }
                        },
                        {
                            marginTop: function () {
                                if ($win.width() < 853) {
                                    return "0px";
                                } else {
                                    return (($carouselDataPosition0.height() - $carouselDataPosition0Img.height()) / 2 + "px");
                                }
                            }
                        }
                    ],
                    speed: [0, 0, 0],
                    ease: "Power2.easeOut"
                },
                {
                    selector: '.carousel li[data-position="2"]',
                    css: [
                        {
                            left: 0,
                            opacity: 0
                        },
                        {
                            left: function () {
                                if ($win.width() < 853) {
                                    return $win.width();
                                } else {
                                    // return "853px";
                                    return $win.width();
                                }
                            },
                            opacity: 0
                        },
                        {
                            left: function () {
                                if ($win.width() < 853) {
                                    return $win.width();
                                } else {
                                    // return "853px";
                                    return $win.width();
                                }
                            },
                            opacity: 0
                        }
                    ],
                    speed: [1, 1, 1],
                    ease: "Power2.easeOut"
                }
            ],
            9: [
                {
                    selector: '.carousel li[data-position="1"]',
                    css: [
                        {
                            left: function () {
                                if ($win.width() < 853) {
                                    return $win.width();
                                } else {
                                    // return "853px";
                                    return $win.width();
                                }
                            },
                            opacity: 0,
                            width: function () {
                                if ($win.width() < 853) {
                                    return $win.width();
                                } else {
                                    return "853px";
                                }
                            }
                        },
                        {
                            left: 0,
                            opacity: 1,
                            width: function () {
                                if ($win.width() < 853) {
                                    return $win.width();
                                } else {
                                    return "853px";
                                }
                            }
                        },
                        {
                            left: function () {
                                if ($win.width() < 853) {
                                    return -$win.width();
                                } else {
                                    // return "-853px";
                                    return -$win.width();
                                }
                            },
                            opacity: 0,
                            width: function () {
                                if ($win.width() < 853) {
                                    return $win.width();
                                } else {
                                    return "853px";
                                }
                            }
                        }
                    ],
                    speed: [1, 1, 1],
                    ease: "Power2.easeOut"
                },
                {
                    selector: '.carousel li[data-position="1"] section',
                    css: [
                        {
                            top: function () {
                                if ($win.width() < 853) {
                                    return "0px";
                                } else {
                                    return (($carouselDataPosition1.height() - $carouselDataPosition1Section.height()) / 2 + "px");
                                }
                            }
                        },
                        {
                            top: function () {
                                if ($win.width() < 853) {
                                    return "0px";
                                } else {
                                    return (($carouselDataPosition1.height() - $carouselDataPosition1Section.height()) / 2 + "px");
                                }
                            }
                        },
                        {
                            top: function () {
                                if ($win.width() < 853) {
                                    return "0px";
                                } else {
                                    return (($carouselDataPosition1.height() - $carouselDataPosition1Section.height()) / 2 + "px");
                                }
                            }
                        }
                    ],
                    speed: [0, 0, 0],
                    ease: "Power2.easeOut"
                },
                {
                    selector: '.carousel li[data-position="1"] img',
                    css: [
                        {
                            marginTop: function () {
                                if ($win.width() < 853) {
                                    return "0px";
                                } else {
                                    return (($carouselDataPosition1.height() - $carouselDataPosition1Img.height()) / 2 + "px");
                                }
                            }
                        },
                        {
                            marginTop: function () {
                                if ($win.width() < 853) {
                                    return "0px";
                                } else {
                                    return (($carouselDataPosition1.height() - $carouselDataPosition1Img.height()) / 2 + "px");
                                }
                            }
                        },
                        {
                            marginTop: function () {
                                if ($win.width() < 853) {
                                    return "0px";
                                } else {
                                    return (($carouselDataPosition1.height() - $carouselDataPosition1Img.height()) / 2 + "px");
                                }
                            }
                        }
                    ],
                    speed: [0, 0, 0],
                    ease: "Power2.easeOut"
                }
            ],
            10: [
                {
                    selector: '.carousel li[data-position="2"]',
                    css: [
                        {
                            left: function () {
                                if ($win.width() < 853) {
                                    return $win.width();
                                } else {
                                    // return "853px";
                                    return $win.width();
                                }
                            },
                            opacity: 0,
                            width: function () {
                                if ($win.width() < 853) {
                                    return $win.width();
                                } else {
                                    return "853px";
                                }
                            }
                        },
                        {
                            left: 0,
                            opacity: 1,
                            width: function () {
                                if ($win.width() < 853) {
                                    return $win.width();
                                } else {
                                    return "853px";
                                }
                            }
                        },
                        {
                            left: 0,
                            opacity: 0,
                            width: function () {
                                if ($win.width() < 853) {
                                    return $win.width();
                                } else {
                                    return "853px";
                                }
                            }
                        }
                    ],
                    speed: [1, 1, 1],
                    ease: "Power2.easeOut"
                },
                {
                    selector: '.carousel li[data-position="2"] section',
                    css: [
                        {
                            top: function () {
                                if ($win.width() < 853) {
                                    return "0px";
                                } else {
                                    return (($carouselDataPosition2.height() - $carouselDataPosition2Section.height()) / 2 + "px");
                                }
                            }
                        },
                        {
                            top: function () {
                                if ($win.width() < 853) {
                                    return "0px";
                                } else {
                                    return (($carouselDataPosition2.height() - $carouselDataPosition2Section.height()) / 2 + "px");
                                }
                            }
                        },
                        {
                            top: function () {
                                if ($win.width() < 853) {
                                    return "0px";
                                } else {
                                    return (($carouselDataPosition2.height() - $carouselDataPosition2Section.height()) / 2 + "px");
                                }
                            }
                        }
                    ],
                    speed: [0, 0, 0],
                    ease: "Power2.easeOut"
                },
                {
                    selector: '.carousel li[data-position="2"] img',
                    css: [
                        {
                            marginTop: function () {
                                if ($win.width() < 853) {
                                    return "0px";
                                } else {
                                    return (($carouselDataPosition2.height() - $carouselDataPosition2Img.height()) / 2 + "px");
                                }
                            }
                        },
                        {
                            marginTop: function () {
                                if ($win.width() < 853) {
                                    return "0px";
                                } else {
                                    return (($carouselDataPosition2.height() - $carouselDataPosition2Img.height()) / 2 + "px");
                                }
                            }
                        },
                        {
                            marginTop: function () {
                                if ($win.width() < 853) {
                                    return "0px";
                                } else {
                                    return (($carouselDataPosition2.height() - $carouselDataPosition2Img.height()) / 2 + "px");
                                }
                            }
                        }
                    ],
                    speed: [0, 0, 0],
                    ease: "Power2.easeOut"
                },
                {
                    selector: '.carousel li[data-position="0"]',
                    css: [
                        {
                            left: 0,
                            opacity: 0
                        },
                        {
                            left: function () {
                                if ($win.width() < 853) {
                                    return $win.width();
                                } else {
                                    // return "853px";
                                    return $win.width();
                                }
                            },
                            opacity: 0
                        },
                        {
                            left: function () {
                                if ($win.width() < 853) {
                                    return $win.width();
                                } else {
                                    // return "853px";
                                    return $win.width();
                                }
                            },
                            opacity: 0
                        }
                    ],
                    speed: [1, 1, 1],
                    ease: "Power2.easeOut"
                }
            ],
        },
        currentState = 0;

    function log(msg, type) {
        var
            types = {
                error: "red",
                init: "green",
                status: "blue"
            };

        type = type || status;

        // console.log("%c" + msg, "background: " + types[type] + "; color: #fff");
    }

    function init() {
        log("init();", "init");
        $parallaxViewport.removeClass("preload");
        $("#loader").hide();
        /mobi/i.test(navigator.userAgent) && !location.hash && setTimeout(function () {
            if (!pageYOffset) window.scrollTo(0, 1);
        }, 1000);
        resize();
        animateSlide("forward", function () {
            // changeState(1);
            // animateSlide("forward");
        });
        changeState(1);
        $(".bg").fadeIn(500);
        $win.on("resize", function () {
            resize();
        });
    }

    function animateSlide(direction, callback) {
        log("animateSlide();", "status");

        resize();
        
        if (direction === "forward") {
            tweener({
                from: 0,
                to: 1,
                callback: function () {
                    if (callback) {
                        callback();
                    } else {
                        addHandlers();
                    }
                }
            }); // Transition _IN_ elements
            if (STATES[currentState - 1]) {
                tweener({
                    from: 1,
                    to: 2,
                    rules: STATES[currentState - 1],
                    callback: function () {
                        this.css({visibility: "hidden"});
                    }
                }); // Transition _OUT_ elements
            }
        } else if (direction === "backward") {
            tweener({
                from: 2,
                to: 1,
                callback: function () {
                    if (callback) {
                        callback();
                    } else {
                        addHandlers();
                    }
                }
            }); // Transition _IN_ elements
            if (STATES[currentState + 1]) {
                tweener({
                    from: 1,
                    to: 0,
                    rules: STATES[currentState + 1],
                    callback: function () {
                        this.css({visibility: "hidden"});
                    }
                }); // Transition _OUT_ elements
            }
        }

        // Tween the background according to current state
        TweenMax.to($(".bg"), 1, {top: currentState * 10 + "px"});
    }

    function tweener(options) {
        var
            obj = options.rules || STATES[currentState],
            from = options.from,
            to = options.to,
            callback = options.callback,
            $elem,
            duration,
            cssFrom,
            tween,
            i,
            prop;

        for (i = 0; i < obj.length; i += 1) {
            $elem = $(obj[i].selector);
            duration = obj[i].speed[to] || 1;
            cssFrom = {};
            tween = {};

            tween.ease = obj[i].ease || "Power3.easeInOut";

            if (obj[i].hasOwnProperty("css")) {
                for (prop in obj[i].css[from]) {
                    cssFrom[prop] = obj[i].css[from][prop];
                    cssFrom.visibility = "visible";
                }
                for (prop in obj[i].css[to]) {
                    if (typeof obj[i].css[to][prop] === "function") {
                        tween[prop] = obj[i].css[to][prop]();
                    } else {
                        tween[prop] = obj[i].css[to][prop];
                    }
                }
                $elem.css(cssFrom);
            }

            if (callback) {
                tween.onCompleteScope = $elem;
                tween.onComplete = callback;
                callback = null;
            }

            TweenMax.to($elem, duration, tween);
        }
    }

    function resize() {
        log("resize();", "status");
        var getIOSWindowHeight = function() {
            // Get zoom level of mobile Safari
            // Note, that such zoom detection might not work correctly in other browsers
            // We use width, instead of height, because there are no vertical toolbars :)
            var zoomLevel = document.documentElement.clientWidth / window.innerWidth;
         
            // window.innerHeight returns height of the visible area. 
            // We multiply it by zoom and get out real height.
            return window.innerHeight * zoomLevel;
        };
        var
            winHeight = $win.height(),
            winWidth = $win.width(),
            headerHeight = $pageHeader.height(),
            footerHeight = $footer.height(),
            viewportHeight = winHeight - 40 - footerHeight,
            obj = STATES[currentState],
            i,
            prop,
            newCSS = {},
            bottleAspectRatio = 0.6773722627737226;

        $parallaxViewport.css({height: viewportHeight});

        for (i = 0; i < obj.length; i += 1) {
            newCSS = {};
            for (prop in obj[i].css[1]) {
                if (typeof obj[i].css[1][prop] === "function") {
                    newCSS[prop] = obj[i].css[1][prop]();
                }
                $(obj[i].selector).css(newCSS);
            }
        }

        if ($win.width() < 853 && +$carousel.css("opacity") > 0) {
            $carousel.width($win.width());
            $carousel.css({top: "50px"});
        } else {
            $carousel.width("853px");
            $carousel.css({top: "50%"});
        }

        if (+$bottleImg.css("opacity") > 0) {
            $bottleImg.height(viewportHeight * 0.35);
            $bottleImg.width($bottleImg.height() * bottleAspectRatio);
            $bottleImg.css({bottom: 0});
        }
    }

    function getAspectRatio () {
        var
            ratio = 0;

        return ratio;
    }

    function addHandlers() {
        log("addHandlers();", "status");

        resize();

        function advanceSlide(e, direction) {
            e.preventDefault();
            e.stopPropagation();
            changeState(direction);
        }

        function nextCheck(e) {
            if (currentState >= 10) {
                advanceSlide(e, -2);
            } else {
                advanceSlide(e, 1);
            }
        }

        function prevCheck(e) {
            if (currentState === 8 && $win.height() > 480) {
                advanceSlide(e, 2);
            } else {
                advanceSlide(e, -1);
            }
        }

        $('#downArrow').on("click.scrolling", function (e) {
            removeHandlers();
            advanceSlide(e, 1);
        });

        $('#leftArrow').on("click.scrolling", function (e) {
            removeHandlers();
            prevCheck(e);
        });

        $('#rightArrow').on("click.scrolling", function (e) {
            removeHandlers();
            nextCheck(e);
        });

        $(document).on("keydown", function (e) {
            if (e.which === 33 || e.which === 39 || e.which === 40) {
                removeHandlers();
                nextCheck(e);
            } else if (e.which === 34 || e.which === 37 || e.which === 38) {
                removeHandlers();
                advanceSlide(e, -1);
            }
        });

        if (currentState < 8 || (currentState >= 8 && $win.height() > 480)) {
            $parallaxViewport.on("mousewheel.scrolling", mouseWheelHandler);
            $parallaxViewport.on("DOMMouseScroll.scrolling", mouseWheelHandler);

            $parallaxViewport.swipe({
                swipe: function (event, direction, distance, duration, fingerCount) {
                    if (direction === "up" || direction === "left") {
                        removeHandlers();
                        nextCheck(event);
                    } else if (direction === "down" || direction === "right") {
                        removeHandlers();
                        advanceSlide(event, -1);
                    }
                },
                tap: function(event, target) {
                    var
                        eTarget = $(event.target).attr("id")
                    if (eTarget === "downArrow") {
                        removeHandlers();
                        advanceSlide(event, 1);
                    } else if (eTarget === "leftArrow") {
                        removeHandlers();
                        prevCheck(event);
                        // advanceSlide(event, -1);
                    } else if (eTarget === "rightArrow") {
                        removeHandlers();
                        nextCheck(event);
                    }
                }
            });
        }
    }

    function removeHandlers() {
        $(document).off("keydown");
        $parallaxViewport.off(".scrolling");
        $('#downArrow').off(".scrolling");
        $('#leftArrow').off(".scrolling");
        $('#rightArrow').off(".scrolling");
        $parallaxViewport.swipe("destroy");
    }

    function changeState(direction) {
        currentState += direction;
        if (currentState < 1) {
            currentState = 1;
            addHandlers();
        } else if (currentState > 10) {
            currentState = 10;
            addHandlers();
        } else {
            if (direction < 0) {
                animateSlide("backward");
            } else {
                animateSlide("forward");
            }

            // console.log("New State:", currentState);
        }
    }

    function mouseWheelHandler(e) {
        var
            e = window.event || e.originalEvent,
            delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));

        // console.log("Mouse wheel scrolled:", delta);
        removeHandlers();

        if (delta < 0 && currentState >= 10) {
            changeState(-2);
        } else {
            changeState(-delta);
        }


        return false;
    }

    $win.load(function () {
        // alert("test 6");
        log("Document loaded.", "init");
        TweenMax.to($("#loader"), 0.25, {autoAlpha: 0, ease: Power2.easeOut, onComplete: init});
    });
    
    window.changeState = changeState;
    
})();