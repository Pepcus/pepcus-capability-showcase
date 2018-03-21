var applied_theme = "default";
var NO_DESC_FOUND_MESSAGE = "No description found.";
var CONFIG_FILE_PATH = "app-config.json";

var loadConfigData = function () {
    $.getJSON(CONFIG_FILE_PATH, function (jsondata) {
        window.appData = jsondata;
        renderApp();
        bindEvents();
    });
};

var onDomReady = function () {
    loadConfigData();
};

var onClickKnowMoreBtn = function (e) {
    $('html,body').animate({
        scrollTop: $('.parent-block-container').offset().top - 100
    }, 'slow');
}

var bindEvents = function () {
    $(".parent-block-layout").on("click", "#knowMoreBtn", onClickKnowMoreBtn);
    $(".parent-block-layout").on("click", ".more-info-btn", onClickMoreInfoBtn);
    $(".header-list").on("click", ".more-info", onClickMoreInfoOnHeader);
    $("#childBlockLayout").on("click", ".child-card-view", onClickChildCardView);
    $(".header-list").on("click", "#backB", onClickBackButton);
    $(".pepcus-logo").on("click", "#backB", onClickPepcusLogo);
    $("#popupContainer").on("click", ".component-list-item", onClickComponentListItem);
    $("#popupContainer").on("click", ".close-button", onClickCloseButton);
    $(".fa-info").hover(onHoverInfo);
    $(".component-description").hover(onHoveroOutInfo);
    $(".wallpaper-overlay").on("click", "#knowMoreBtn", onClickKnowMoreBtn);
    $(".wallpaper-overlay").on("click", ".more-info-btn", onClickMoreInfoBtn);
    $("#popupContainer").on("click", ".side-navigation-icon", hamburgerIconPress);
    $("#uiElementsList").on("click", ".component-list-item", onClickUIlist);

    $("#backendElementsList").on("click", ".component-list-item", onClickBackendlist);
    $("#MiscellaneousElementsList").on("click", ".component-list-item", onClickMiscellaneouslist);
    /*$("header").mousemove(onenterDescriptionText);
    */

    $("#popupContainer").bind("keydown", function (evt) {
        // evt = evt || window.event;

        if (evt.keyCode === 27) {
            $(".overlay-layout").fadeOut(400);
            $("#popupContainer").fadeOut(400);
            $("#childBlockLayout").show();
            $("iframe").attr("src", '');
            $(".iframe-section").remove();
            $("#uiElementsList").empty();
            $("#backendElementsList").empty();
            $("#MiscellaneousElementsList").empty();
        }
    });
}

//*************************** Events **************************************//
/*var onenterDescriptionText = function(e) {
		$('#descriptionData').hide();

}
var onHoverDescriptionText = function(e) {
console.log(e.currentTarget);
	if(e.type == 'mouseenter') {
	$('#descriptionData').hide();
    e.preventDefault();
    $("#descriptionData").html( e.currentTarget.innerHTML);
    $('#descriptionData').css( 'position', 'absolute' );
    $('#descriptionData').css( 'top', e.pageY - 100);
    $('#descriptionData').css( 'left', e.pageX - 150 );
    $('#descriptionData').fadeIn();

}else{
	$('#descriptionData').hide();

	}

}*/

var onClickMoreInfoBtn = function (e) {
    var target = $(e.currentTarget);
    $('.showcase-image-header').hide();
    var selectedItemName = $(target).attr("data-name");
    if (selectedItemName === 'Coming Soon') {
        $(".disable-overlay").css({"display": "flex", "display": "-webkit-box"});
    } else {
        $(".disable-overlay").css("display", "none");
    }
    $('#parents-block1').removeClass('animated fadeIn');
    $('#parents-block1').addClass('animated fadeOut');
    $('#parents-block2').removeClass('animated fadeIn');
    $('#parents-block2').addClass('animated fadeOut');
    $('#parents-block3').removeClass('animated fadeIn');
    $('#parents-block3').addClass('animated fadeOut');

    setTimeout(function () {
        $(".parent-block-layout").hide();
        $(".wallpaper-overlay").hide();
        $(".showcase-wallpaper").hide();
        $("#childBlockLayout").show();
    }, 500);
    $('html,body').animate({
        scrollTop: $('#childBlockLayout').offset().top
    }, 600);
    $("#childBlockLayout h2").html(selectedItemName);
    childBlockLayout(selectedItemName);
    $(".component-heading").html(selectedItemName);

}
onClickMoreInfoOnHeader = function (e) {
    $('.showcase-image-header').hide();

    var target = $(e.currentTarget);
    var selectedItemName = $(target).attr("data-name");
    if (selectedItemName === 'Coming Soon') {
        $(".disable-overlay").css({"display": "flex", "display": "-webkit-box"});
    } else {
        $(".disable-overlay").css("display", "none");
    }
    $('#parents-block1').removeClass('animated fadeIn');
    $('#parents-block1').addClass('animated fadeOut');
    $('#parents-block2').removeClass('animated fadeIn');
    $('#parents-block2').addClass('animated fadeOut');
    $('#parents-block3').removeClass('animated fadeIn');
    $('#parents-block3').addClass('animated fadeOut');
    setTimeout(function () {
        $(".parent-block-layout").fadeOut();
        $(".wallpaper-overlay").fadeOut();
        $(".showcase-wallpaper").fadeOut();
        $("#childBlockLayout").fadeIn();
    }, 600);
    $('html,body').animate({
        scrollTop: $('#childBlockLayout').offset().top
    }, 600);
    $("#childBlockLayout h2").html(selectedItemName);
    childBlockLayout(selectedItemName);
    $(".component-heading").html(selectedItemName);
}
var onClickChildCardView = function (e) {
    var target = $(e.currentTarget);
    var selectedItemName = $(target).attr("data-name");
    // $(".overlay-layout").fadeIn(600);
    $('#childBlockLayout').fadeOut(400);
    $("#popupContainer").fadeIn(400);
    $("#popupContainer").focus();
    componentPopupLayout(selectedItemName);
};
var onClickComponentListItem = function (e) {
    if ($(".iframe-heading").is(':empty')) {
        $(".iframe-heading").html($(".selected-item").text());
    }
};

/*var onClickComponentList = function(e) {
	var target = $(e.currentTarget);
	var selectedItemName = $(target).attr("data-name");
	$(e.currentTarget).addClass("selected-item");
	var targetId = (e.currentTarget.id);
	renderComponetListItems(selectedItemName,targetId);
	console.log(targetId);
}*/
/*var onClickIcon = function(e) {
	$(".iframe-section").remove();
	$(".icons").removeClass("selected-icon");
	$('.menu-icons').empty();
	var target = $(e.currentTarget);
	var selectedIconName = $(target).attr("data-name");
	componentPopupLayout(selectedIconName);
	renderIframe(selectedIconName);
	$(e.currentTarget).addClass("selected-icon");
	console.log(e.currentTarget);
};*/
var onClickUIlistScrollTop = function (e) {
    $(".fixedDiv").scrollTop(0);
}

var onClickUIlist = function (e) {
    $(".disable-overlay").css("display", "none");
    $("#uiElementsList li").removeClass("selected-item");
    $("#backendElementsList li").removeClass("selected-item");
    $("#MiscellaneousElementsList li").removeClass("selected-item");

    $(".component-list-item").removeClass("active");
    $(".component-list-item").removeClass("selected-item");
    $(e.currentTarget).addClass("selected-item");
    $(".component-heading").html("User Interface");
    var target = $(e.currentTarget);
    var targetId = (e.currentTarget.id);
    var selectedItemName = $(target).attr("data-name");
    onClickUIlistItem(selectedItemName, targetId, target);
    $(".fixedDiv").scrollTop(0);
    $(".iframe-heading").html($(".active").text());
    renderIframe(selectedItemName);


}
var onClickBackendlist = function (e) {
    /*	$(".disable-overlay").css({"display":"flex","display":"-webkit-box"});
    */
    $(".disable-overlay").css("display", "none");
    $("#uiElementsList div").removeClass("opened");
    $("#uiElementsList li").removeClass("selected-item");
    $("#backendElementsList li").removeClass("selected-item");
    $("#MiscellaneousElementsList li").removeClass("selected-item");
    $(".component-list-item").removeClass("active");
    $(".component-list-item").removeClass("selected-item");
    $(".iframe-heading").html('');
    $("#uichilds ").remove();

    $(".component-heading").html("Backend Utility");
    $(e.currentTarget).addClass("active");
    var target = $(e.currentTarget);
    var targetId = (e.currentTarget.id);
    var selectedItemName = $(target).attr("data-name");
    $(e.currentTarget).addClass("selected-item");
    renderIframe(selectedItemName);
    console.log(selectedItemName);
    $(".iframe-heading").html($(".active").text());
    if ($(window).width() < 769) {
        if (!($(".fixed-menu").hasClass("inactive"))) {
            $(".fixed-menu").addClass("inactive");
        }
    }
}
var onClickMiscellaneouslist = function (e) {
    $(".disable-overlay").css({"display": "flex", "display": "-webkit-box"});
    $("#uiElementsList li").removeClass("selected-item");
    $("#uiElementsList div").removeClass("opened");
    $("#backendElementsList li").removeClass("selected-item");
    $("#MiscellaneousElementsList li").removeClass("selected-item");
    $("#MiscellaneousElementsList div").removeClass("selected-item active");
    $("#uichilds ").remove();
    $(".iframe-heading").html('');
    $(".component-heading").html("");
    $(".component-heading").html("Coming Soon");
    $(".component-list-item").removeClass("active");
    $(".component-list-item").removeClass("selected-item");
    var target = $(e.currentTarget);
    var selectedItemName = $(target).attr("data-name");
    $(e.currentTarget).addClass("selected-item active");
    renderIframe(selectedItemName);
    $(".iframe-heading").html($(".active").text());

    if ($(window).width() < 769) {
        if (!($(".fixed-menu").hasClass("inactive"))) {
            $(".fixed-menu").addClass("inactive");
        }
    }
}
var onClickSubChilds = function (e) {
    $(".iframe-heading").html('');
    $("#uiChilds li").removeClass("active");
    var target = $(e.currentTarget);
    var selectedItemName = $(target).attr("data-name");
    renderIframe(selectedItemName);
    $(e.currentTarget).addClass("active");
    $(".iframe-heading").html($(".active").text());

}


var onClickPepcusLogo = function (e) {
    $(".overlay-layout").fadeOut(500);
    $("#popupContainer").fadeOut(500);
    $("#childBlockLayout").show();
    $("iframe").attr("src", '');
    $(".iframe-section").remove();
    $("#uiElementsList").empty();
    $("#backendElementsList").empty();
    $("#MiscellaneousElementsList").empty();
    onClickBackButton();

}
var onClickBackButton = function (e) {
    $('.showcase-image-header').show();
    $("#popupContainer").hide();
    $(".child-block-layout").hide();
    $('#parents-block1').removeClass('animated fadeOut');
    $('#parents-block1').addClass('animated fadeIn');

    $('#parents-block2').removeClass('animated fadeOut');
    $('#parents-block2').addClass('animated fadeIn');

    $('#parents-block3').removeClass('animated fadeOut');
    $('#parents-block3').addClass('animated fadeIn');
    $(".parent-block-layout").show();
    $(".wallpaper-overlay").show();
    $(".showcase-wallpaper").show();

    $('html,body').animate({
        scrollTop: $('.parent-block-container').offset().top
    }, 'slow');
    $(".card-view-container").html('');

}
var onHoverInfo = function (e) {
    if (e.type == "mouseenter") {
        $(".description-popup").removeClass("animated slideOutRight");
        $(".description-popup").addClass("animated slideInRight");
        $(".description-popup").css("display", "block");

    }
}

var onHoveroOutInfo = function (e) {
    if (e.type == "mouseleave") {
        $(".description-popup").removeClass("animated slideInRight");
        $(".description-popup").addClass("animated slideOutRight");
        setTimeout(function () {
            $(".description-popup").css("display", "none");
        }, 700);
    }
}
var onClickCloseButton = function () {
    $(".overlay-layout").fadeOut(500);
    $("#popupContainer").fadeOut(500);
    $("#childBlockLayout").show();
    $("iframe").attr("src", '');
    $(".iframe-section").remove();
    $("#uiElementsList").empty();
    $("#backendElementsList").empty();
    $("#MiscellaneousElementsList").empty();
}

/*function ComponetListItems() {

	var UIlistring = '<span class="component-ul-heading">User Interface</span>';
	var BackendListring = '<span class="component-ul-heading">Backend Utility</span>';
	$.each(window.appData.CapacityShowcase.WebApps.StaticWebapp , function(key, item) {
		var generateid = item._name.replace(/\s/g,'');
		if(item._parentApp == "User Interface"){
			 UIlistring += '<li data-name ="'+item._name+'" id="'+generateid+'"><div class="component-list-item hvr-rectangle-out"  data-name="'+item._name+'"><a href="#'+generateid+'"><span><i class="fa'+" "+''+item._iconClass+'" aria-hidden="true"></i></span>'+item._name+'</a></div></li>';
			//console.log(listring+" UI is runnig");
		}		
		if(item._parentApp === "Backend Utility"){
			 BackendListring += '<li data-name ="'+item._name+'" id="'+generateid+'" ><div class="component-list-item hvr-rectangle-out"  data-name="'+item._name+'"><a href="#'+generateid+'"><span><i class="fa'+" "+''+item._iconClass+'" aria-hidden="true"></i></span>'+item._name+'</a></div></li>';
					//	console.log("Backend is runnig");
		}
	});
	$("#uiElementsList").append(UIlistring);
	$("#backendElementsList").append(BackendListring);
}*/

function renderParentBlockLayout() {
    $('#descriptionData').hide();
    var htmlString = '';
    var x = 1;
    $.each(window.appData.CapacityShowcase.WebApps.StaticWebapp, function (key, val) {
        //console.log(val._name);
        if (val._parentApp === '') {
            htmlString += '<div class = "parents-block' + x + ' more-info-btn" id = "parents-block' + x + '"  data-name="' + val._name + '" title="Click to know more">' +
                '<div class = "parent-heading">' + val._name + '</div>' +
                '<div class = "parent-more-info-btn">' +
                '</div>' +
                '</div>';
            x++;
        }
    });
    $("#parentBlockContainer").append(htmlString);
    $('.showcase-image-header').addClass("animated flipInX");
}

function childBlockLayout(selectedItemName) {
    $("#cardViewContainer").empty();
    $('#descriptionData').hide();
    var index = 1;
    var htmlString = '';
    $.each(window.appData.CapacityShowcase.WebApps.StaticWebapp, function (key, item) {
        if (item._parentApp === selectedItemName) {
            htmlString += '<div id="box' + index + ' "class="child-card-view col-md-4" data-name="' + item._name + '">' +
                '<div class="child-card-container">' +
                '<div class="child-heading-container ">' +
                '<div class="child-item-no"><h1 class="h1">' + index + '.</h1></div>' +
                '<div class="child-item-name" ><h1 class="h1">' + item._name + '</h1></div>' +
                '</div>' +
                '<div class="child-item-details"><p title="' + item._appData + '">' + item._appData + '</p></div>' +
                '</div>' +
                '</div>';
            index++;
        }
    });

    $(".child-container").scroll(function () {
        if ($(this).scrollTop() > 200) {
            //$('.child-card-view').fadeOut();
        }
        else {
            //$('.child-card-view').fadeIn();
        }
    });

    $("#cardViewContainer").append(htmlString);
    for (var i = 0; i < index; i++) {
        (function (i) {
            setTimeout(function () {
                $(".child-card-view").eq(i).addClass("animated zoomIn");
                $(".child-card-view").eq(i).css("display", "block");
                $("#cardViewContainer").getNiceScroll().resize(function () {
                    console.log("resizer called");
                });

            }, 500 * i);
        }(i));
    }
    /*		$(".child-item-details p").hover(onHoverDescriptionText);
    */
    $("#cardViewContainer").niceScroll({cursorborder: "", cursorcolor: "#A9A9A9"});

}

function componentPopupLayout(selectedItemName) {
    $(".iframe-heading").empty();
    $(".component-list").empty();
    var componentHeading = '';
    var htmlString = '';
    var iconString = '';
    var iframehtml = '';
    var UIlistring = '<span class="component-ul-heading">User Interface</span>';
    var BackendListring = '<span class="component-ul-heading">Backend Utility</span>';
    var MiscellaneousListring = '<span class="component-ul-heading">Coming Soon</span>';
    $.each(window.appData.CapacityShowcase.WebApps.StaticWebapp, function (key, item) {
        if (item._parentApp == "User Interface") {
            var generateid = item._name.replace(/\s/g, '');
            UIlistring += '<li data-name ="' + item._name + '" id="' + generateid + '"><div data-name ="' + item._name + '" id="' + generateid + '" class="component-list-item hvr-rectangle-out"  data-name="' + item._name + '"><a><span><i class="fa' + " " + '' + item._iconClass + '" aria-hidden="true"></i></span>' + item._name + '</a></div></li>';
        }
        if (item._parentApp === "Backend Utility") {
            var generateid = item._name.replace(/\s/g, '');
            BackendListring += '<li data-name ="' + item._name + '" id="' + generateid + '" ><div data-name ="' + item._name + '" id="' + generateid + '" class="component-list-item hvr-rectangle-out"  data-name="' + item._name + '"><a><span><i class="fa' + " " + '' + item._iconClass + '" aria-hidden="true"></i></span>' + item._name + '</a></div></li>';
        }
        if (item._parentApp === "Coming Soon") {
            var generateid = item._name.replace(/\s/g, '');
            MiscellaneousListring += '<li data-name ="' + item._name + '" id="' + generateid + '" ><div data-name ="' + item._name + '" id="' + generateid + '" class="component-list-item hvr-rectangle-out"  data-name="' + item._name + '"><a><span><i class="fa' + " " + '' + item._iconClass + '" aria-hidden="true"></i></span>' + item._name + '</a></div></li>';
        }

    });
    $("#uiElementsList").append(UIlistring);
    $("#backendElementsList").append(BackendListring);
    $("#MiscellaneousElementsList").append(MiscellaneousListring);
    $.each(window.appData.CapacityShowcase.WebApps.StaticWebapp, function (key, item) {
        var generateid = item._name.replace(/\s/g, '');
        if (item._name === selectedItemName) {
            iframehtml += '<div id="' + generateid + '" class="iframe-section"><section class="section-content">' +
                '<iframe src="' + item._applicationUrl + item._welcomePage + '"></iframe>' +
                '</section></div>';
            /*$.ajax({
                url: item._applicationUrl+'/description.txt',
                success: function(componentDescriptionData) {
                    $(".description-popup").html('');
                    $(".description-popup").html(componentDescriptionData);
                }
            });*/
        }
    });
    $(".iframe-section-container").append(iframehtml);
    var selectedItemNameWithoutSpaces = selectedItemName.replace(/\s/g, '');
    var selectedItemId = "#" + selectedItemNameWithoutSpaces;
    var iframeHeadingText = $(".active").text();

    $(selectedItemId).addClass("selected-item");
    $(selectedItemId + " a").click();
    if (iframeHeadingText != '') {
        $(".iframe-heading").html(iframeHeadingText);
    } else {
        $(".iframe-heading").html($(".selected-item").text());
    }
    $(".fixedDiv").niceScroll({cursorborder: "", cursorcolor: "#C2C2C2"});

    $("#uiElementsList").on("click", onClickUIlistScrollTop);
    //   $("iframe" ).niceScroll({cursorborder:"",cursorcolor:"#C2C2C2"});


}

function onClickUIlistItem(selectedItemName, targetId, target) {
    var listring = '';
    var removedSpaceId = targetId.replace(/\s/g, '');
    var Id = '#' + removedSpaceId;
    $("#uiChilds").css("transition", "height 2s");
    $("#uiElementsList li" + Id).siblings("li").find("ul").remove();
    $("#uiChilds:nth-child(2)").remove();
//	$("#uiChilds li").siblings("li").find("li").removeClass("active");
    if ($(target).hasClass("opened")) {
        $(target).removeClass("opened");
    } else {
        if ($(target).has("ul").length == 0) {
            $.each(window.appData.CapacityShowcase.WebApps.StaticWebapp, function (key, item) {
                var generateid = item._name.replace(/\s/g, '');
                // console.log("geneerate id ka console"+generateid)
                if (item._parentApp === selectedItemName) {
                    listring += '<li data-name ="' + item._name + '" id="' + generateid + '" class="sub-list"><div class="component-list-subitem hvr-rectangle-out"  data-name="' + item._name + '"><div class="sub-child-list"><i class="fa' + " " + '' + item._iconClass + '" aria-hidden="true"></i>' + item._name + '</div></div></li>';
                }
            });
            var ul = '<ul id="uiChilds">' + listring + '</ul>';
            $(Id).append(ul);

            $("#uiChilds").on("click", "li", onClickSubChilds);
            $(".sub-list").click(function () {
                $(".fixedDiv").scrollTop(0);
            });
            $("#uiChilds li:first").addClass("active");
            $("#uiElementsList div").removeClass("opened");
            $(target).addClass("opened");

        }
    }
    $(".fixedDiv").getNiceScroll().resize();
    if ($(window).width() < 769) {
        if (!($(".fixed-menu").hasClass("inactive"))) {
            $(".fixed-menu").addClass("inactive");
            $(".popup-header-left").css("margin-left", "0px");
        }

    }
}

function onClickBackendlistItem() {
    $("#backendElementsList").on("click", "li", onClickBackendSubChilds);
    if ($(window).width() < 769) {
        if (!($(".fixed-menu").hasClass("inactive"))) {
            $(".fixed-menu").addClass("inactive");
        }
    }
}

function renderIframe(selectedItemName) {
    $.each(window.appData.CapacityShowcase.WebApps.StaticWebapp, function (key, item) {
 /*     if (item._parentApp === "Backend Utility") {
            $("iframe").attr("src", "");
        }
        if (item._name != selectedItemName) {
            return;
        }
        $("iframe").attr("src", item._applicationUrl + item._welcomePage);  */
        
        if (item._name == selectedItemName) {
           $("iframe").attr("src", item._applicationUrl + item._welcomePage);
        }
        
    });

//	$("iframe").niceScroll({cursorborder:"",cursorcolor:"#C2C2C2"});

}

function hamburgerIconPress() {
    $(".fixed-menu").toggleClass('inactive');
    $(".right-rendering-container").toggleClass("shift-contents");
    if ($(window).width() < 769) {

        if (($(".right-rendering-container").hasClass("shift-contents"))) {
            $(".popup-header-left").css("margin-left", "210px");
        } else {
            $(".popup-header-left").css("margin-left", "0px");

        }
    }
    //  $(navClose).click(function(){
    //     console.log('unclicked');
    // $('.sidebar').toggleClass('active');
    // });
}

/*function reRenderList(selectedItemName){
	$(".iframe-heading").empty();
	$(".component-list").html('');
	var htmlString = '';
	$.each(window.appData.CapacityShowcase.WebApps.StaticWebapp, function(key, item) {
		var generateid = item._name.replace(/\s/g,'');
		if(item._parentApp === selectedItemName) {
			htmlString += '<div class="component-list-item"  data-name="'+item._name+'"><a href="#'+generateid+'">'+item._name+'</a></div>';
			}
	});
	$(".component-list").append(htmlString);
	$(".component-list-item:first").addClass("selected-item");

}
*///********************************************************************//

window.addEvent('domready', function () {
    onDomReady();
});

var renderApp = function () {
    $("#childBlockLayout").hide();
    $("#popupContainer").hide();
    renderParentBlockLayout();
    $('.showcase-image-header').addClass("animated flipInX");
}

/************************Parallax effect************************/
window.onload = function () {
    var parallaxBox = document.getElementById('showcase-container');
    var left = document.getElementById('parent-block-layout').offsetLeft;
    var top = document.getElementById('parent-block-layout').offsetTop;

    parallaxBox.onmousemove = function (event) {
        event = event || window.event;
        var x = event.clientX - parallaxBox.offsetLeft,
            y = event.clientY - parallaxBox.offsetTop;

        mouseParallax('parent-block-layout', left, top, x, y, 30);
    }

    function mouseParallax(id, left, top, mouseX, mouseY, speed) {
        var obj = document.getElementById(id);
        var parentObj = obj.parentNode,
            containerWidth = parseInt(parentObj.offsetWidth),
            containerHeight = parseInt(parentObj.offsetHeight);
        obj.style.left = left - (((mouseX - (parseInt(obj.offsetWidth) / 2 + left)) / containerWidth) * speed) + 'px';
        obj.style.top = top - (((mouseY - (parseInt(obj.offsetHeight) / 2 + top)) / containerHeight) * speed) + 'px';
    }
}