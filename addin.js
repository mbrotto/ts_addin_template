(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
//Typescript source site project
//class to be initialized at the start of the geotab addin lifecycle - initialize
var Addin = /** @class */ (function () {
    //initialize addin 
    function Addin(api) {
        //Build the DOM
        this.displayButton = document.getElementById("displayButton");
        this.hideButton = document.getElementById("hideButton");
        this.displayOutput = document.getElementById('displayOutput');
        this.api = api;
    }
    Addin.prototype.showOutput = function () {
        // let displayOutput = document.getElementById('displayOutput');
        this.displayOutput.innerHTML = 'Output text to display';
    };
    Addin.prototype.hideOutput = function () {
        this.displayOutput.innerHTML = '';
    };
    //render addin
    Addin.prototype.render = function () {
    };
    //add any event handlers
    Addin.prototype.addEventHandlers = function () {
        this.displayButton.addEventListener('click', this.showOutput, false);
        this.hideButton.addEventListener('click', this.hideOutput, false);
    };
    Addin.prototype.removeEventHandlers = function () {
        this.displayButton.removeEventListener('click', this.showOutput, false);
        this.hideButton.removeEventListener('click', this.hideOutput, false);
    };
    //blur actions - de-initialize actions
    Addin.prototype.unload = function () {
        //this.abortCurrentTask();
        //remove event listeners
        this.removeEventHandlers();
    };
    return Addin;
}());
;
geotab.addin.addinName = function () {
    var addin;
    return {
        initialize: function (api, state, callback) {
            addin = new Addin(api);
            api.getSession(function (session, server) {
                var userName = session.userName;
                console.log("userName: " + userName);
                console.log("server: " + server);
            });
            callback();
        },
        focus: function () {
            addin.render();
            addin.addEventHandlers();
        },
        blur: function () {
            addin.unload();
        }
    };
};
},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzb3VyY2UvYWRkaW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQSxnQ0FBZ0M7QUFXaEMsaUZBQWlGO0FBQ2pGO0lBT0ksbUJBQW1CO0lBQ25CLGVBQWEsR0FBRztRQU5oQixlQUFlO1FBQ0Usa0JBQWEsR0FBZ0IsUUFBUSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUN0RSxlQUFVLEdBQWdCLFFBQVEsQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDakYsa0JBQWEsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBSXJELElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0lBQ25CLENBQUM7SUFFTywwQkFBVSxHQUFsQjtRQUNJLGdFQUFnRTtRQUNoRSxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsR0FBRyx3QkFBd0IsQ0FBQztJQUM1RCxDQUFDO0lBRU8sMEJBQVUsR0FBbEI7UUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDdEMsQ0FBQztJQUVELGNBQWM7SUFDZCxzQkFBTSxHQUFOO0lBRUEsQ0FBQztJQUVELHdCQUF3QjtJQUN4QixnQ0FBZ0IsR0FBaEI7UUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3JFLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDdEUsQ0FBQztJQUVPLG1DQUFtQixHQUEzQjtRQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDeEUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN6RSxDQUFDO0lBRUQsc0NBQXNDO0lBQ3RDLHNCQUFNLEdBQU47UUFDSSwwQkFBMEI7UUFDMUIsd0JBQXdCO1FBQ3hCLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFDTCxZQUFDO0FBQUQsQ0EzQ0EsQUEyQ0MsSUFBQTtBQUFBLENBQUM7QUFFRixNQUFNLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRztJQUNyQixJQUFJLEtBQVksQ0FBQztJQUVqQixPQUFPO1FBQ0gsVUFBVSxFQUFFLFVBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxRQUFRO1lBQzdCLEtBQUssR0FBRyxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN2QixHQUFHLENBQUMsVUFBVSxDQUFDLFVBQVMsT0FBTyxFQUFFLE1BQU07Z0JBQ25DLElBQUksUUFBUSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUM7Z0JBQ2hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBYSxRQUFVLENBQUMsQ0FBQztnQkFDckMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFXLE1BQVEsQ0FBQyxDQUFDO1lBQ3JDLENBQUMsQ0FBQyxDQUFBO1lBRUYsUUFBUSxFQUFFLENBQUM7UUFDZixDQUFDO1FBQ0QsS0FBSyxFQUFFO1lBQ0gsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ2YsS0FBSyxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDN0IsQ0FBQztRQUNELElBQUksRUFBRTtZQUNGLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNuQixDQUFDO0tBQ0osQ0FBQztBQUNOLENBQUMsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIi8vVHlwZXNjcmlwdCBzb3VyY2Ugc2l0ZSBwcm9qZWN0XHJcblxyXG5pbnRlcmZhY2UgR2VvdGFiIHtcclxuICAgIGFkZGluOiB7XHJcbiAgICAgICAgLy9OYW1lIG9mIHRoZSBhZGQtaW5cclxuICAgICAgICBhZGRpbk5hbWU6IEZ1bmN0aW9uXHJcbiAgICB9O1xyXG59XHJcblxyXG5kZWNsYXJlIGNvbnN0IGdlb3RhYjogR2VvdGFiO1xyXG5cclxuLy9jbGFzcyB0byBiZSBpbml0aWFsaXplZCBhdCB0aGUgc3RhcnQgb2YgdGhlIGdlb3RhYiBhZGRpbiBsaWZlY3ljbGUgLSBpbml0aWFsaXplXHJcbmNsYXNzIEFkZGluIHtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgYXBpO1xyXG4gICAgLy9CdWlsZCB0aGUgRE9NXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGRpc3BsYXlCdXR0b246IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkaXNwbGF5QnV0dG9uXCIpO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBoaWRlQnV0dG9uOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGlkZUJ1dHRvblwiKTtcclxuICAgIGRpc3BsYXlPdXRwdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlzcGxheU91dHB1dCcpO1xyXG5cclxuICAgIC8vaW5pdGlhbGl6ZSBhZGRpbiBcclxuICAgIGNvbnN0cnVjdG9yIChhcGkpIHtcclxuICAgICAgICB0aGlzLmFwaSA9IGFwaTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNob3dPdXRwdXQoKXtcclxuICAgICAgICAvLyBsZXQgZGlzcGxheU91dHB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXNwbGF5T3V0cHV0Jyk7XHJcbiAgICAgICAgdGhpcy5kaXNwbGF5T3V0cHV0LmlubmVySFRNTCA9ICdPdXRwdXQgdGV4dCB0byBkaXNwbGF5JztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGhpZGVPdXRwdXQoKXtcclxuICAgICAgICB0aGlzLmRpc3BsYXlPdXRwdXQuaW5uZXJIVE1MID0gJyc7XHJcbiAgICB9XHJcblxyXG4gICAgLy9yZW5kZXIgYWRkaW5cclxuICAgIHJlbmRlciAoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vYWRkIGFueSBldmVudCBoYW5kbGVyc1xyXG4gICAgYWRkRXZlbnRIYW5kbGVycygpIHtcclxuICAgICAgICB0aGlzLmRpc3BsYXlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnNob3dPdXRwdXQsIGZhbHNlKTtcclxuICAgICAgICB0aGlzLmhpZGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhpZGVPdXRwdXQsIGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlbW92ZUV2ZW50SGFuZGxlcnMoKXtcclxuICAgICAgICB0aGlzLmRpc3BsYXlCdXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnNob3dPdXRwdXQsIGZhbHNlKTtcclxuICAgICAgICB0aGlzLmhpZGVCdXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhpZGVPdXRwdXQsIGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICAvL2JsdXIgYWN0aW9ucyAtIGRlLWluaXRpYWxpemUgYWN0aW9uc1xyXG4gICAgdW5sb2FkICgpIHtcclxuICAgICAgICAvL3RoaXMuYWJvcnRDdXJyZW50VGFzaygpO1xyXG4gICAgICAgIC8vcmVtb3ZlIGV2ZW50IGxpc3RlbmVyc1xyXG4gICAgICAgIHRoaXMucmVtb3ZlRXZlbnRIYW5kbGVycygpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZ2VvdGFiLmFkZGluLmFkZGluTmFtZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGxldCBhZGRpbjogQWRkaW47XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBpbml0aWFsaXplOiAoYXBpLCBzdGF0ZSwgY2FsbGJhY2spID0+IHtcclxuICAgICAgICAgICAgYWRkaW4gPSBuZXcgQWRkaW4oYXBpKTtcclxuICAgICAgICAgICAgYXBpLmdldFNlc3Npb24oZnVuY3Rpb24oc2Vzc2lvbiwgc2VydmVyKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdXNlck5hbWUgPSBzZXNzaW9uLnVzZXJOYW1lO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYHVzZXJOYW1lOiAke3VzZXJOYW1lfWApO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYHNlcnZlcjogJHtzZXJ2ZXJ9YCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZm9jdXM6ICgpID0+IHtcclxuICAgICAgICAgICAgYWRkaW4ucmVuZGVyKCk7XHJcbiAgICAgICAgICAgIGFkZGluLmFkZEV2ZW50SGFuZGxlcnMoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJsdXI6ICgpID0+IHtcclxuICAgICAgICAgICAgYWRkaW4udW5sb2FkKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufTsiXX0=
