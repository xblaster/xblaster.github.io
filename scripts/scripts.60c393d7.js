"use strict";angular.module("lo2kWebsiteApp",["ngRoute"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/projects/:id/view",{templateUrl:"views/projects/view.html",controller:"ProjectsViewCtrl"}).otherwise({redirectTo:"/"})}]).run(["$rootScope","$timeout",function(a,b){a.$on("$viewContentLoaded",function(){b(function(){componentHandler.upgradeAllRegistered()})})}]);var __refreshCards=function(){console.log("refreshCarsds !"),$(".mdl-card").each(function(a,b){var c=$(b).offset(),d=(c.top+c.left)/2,e=""+d+"ms",f=""+(d+550)+"ms",g=""+(d+950)+"ms";$(b).css("-webkit-animation-delay",e),$(b).css("animation-delay",e),$(b).find("h4").css("-webkit-animation-delay",f),$(b).find("h4").css("animation-delay",f),$(b).find(".mdl-card__supporting-text").css("-webkit-animation-delay",g),$(b).find(".mdl-card__supporting-text").css("animation-delay",g),$(b).addClass("card-pop-anim")})},refreshCards=function(){setTimeout(__refreshCards,1)};angular.module("lo2kWebsiteApp").directive("refreshCards",function(){return function(a,b,c){a.$last&&refreshCards()}}).controller("MainCtrl",["$scope","GooglSpreadsheet","$location","$timeout",function(a,b,c,d){b.get().then(function(b){a.projects=b,a.preloadFullImg(a.projects),a.loading=!1,d(function(){componentHandler.upgradeAllRegistered()},200)}),a.getStyleForBox=function(a){var b;b=a.fullLoaded?"images/normal/"+a.background:"images/mini/"+a.background;var c={background:"url('"+b+"') center / cover"};return c},a.preloadFullImg=function(b){angular.forEach(b,function(b,c){var d=$("<img/>");d[0].src="images/normal/"+b.background,d.one("load",function(){a.$apply(function(){b.fullLoaded=!0})})})},a.goTo=function(a){}}]),angular.module("lo2kWebsiteApp").service("GooglSpreadsheet",["$http","$q",function(a,b){var c=function(){var c="https://spreadsheets.google.com/feeds/list/1CEbHKEYOVoK85b0lpCvDDGu0heWyWV4nWylNN8iCmRE/1/public/values?alt=json-in-script&callback=googlSpre",d=[],e=b.defer();return a({method:"JSONP",url:c}),window.googlSpre=function(a){for(var b=0;b<a.feed.entry.length;b++){var c=a.feed.entry[b],f={};f.id=b,f.link=c.gsx$link.$t,f.description=c.gsx$description.$t,f.category=c.gsx$category.$t,f.name=c.gsx$name.$t,f.date=c.gsx$date.$t,f.importance=c.gsx$importance.$t,f.background=c.gsx$background.$t,f.tags=c.gsx$tags.$t.split(","),d.push(f)}e.resolve(d)},e.promise};return{get:c}}]),angular.module("lo2kWebsiteApp").controller("ProjectsViewCtrl",["$scope","$routeParams","GooglSpreadsheet",function(a,b,c){a.id=b.id,c.get().then(function(b){a.project=b[a.id]})}]);