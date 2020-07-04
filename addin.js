(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
//Typescript source site project
//class to be initialized at the start of the geotab addin lifecycle - initialize
var Addin = /** @class */ (function () {
    //initialize addin 
    function Addin(api) {
        //Build the DOM
        this.displayButton = document.getElementById("displayButton");
        this.hideButton = document.getElementById("hideButton");
        this.displayOutput = document.getElementById("displayOutput");
        this.api = api;
    }
    Addin.prototype.showOutput = function () {
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
                var server = session.server;
                console.log(server);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzb3VyY2UvYWRkaW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQSxnQ0FBZ0M7QUFXaEMsaUZBQWlGO0FBQ2pGO0lBT0ksbUJBQW1CO0lBQ25CLGVBQWEsR0FBRztRQU5oQixlQUFlO1FBQ0Usa0JBQWEsR0FBZ0IsUUFBUSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUN0RSxlQUFVLEdBQWdCLFFBQVEsQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDaEUsa0JBQWEsR0FBZ0IsUUFBUSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUluRixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztJQUNuQixDQUFDO0lBRU8sMEJBQVUsR0FBbEI7UUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsR0FBRyx3QkFBd0IsQ0FBQztJQUM1RCxDQUFDO0lBRU8sMEJBQVUsR0FBbEI7UUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDdEMsQ0FBQztJQUVELGNBQWM7SUFDZCxzQkFBTSxHQUFOO0lBRUEsQ0FBQztJQUVELHdCQUF3QjtJQUN4QixnQ0FBZ0IsR0FBaEI7UUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3JFLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDdEUsQ0FBQztJQUVPLG1DQUFtQixHQUEzQjtRQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDeEUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN6RSxDQUFDO0lBRUQsc0NBQXNDO0lBQ3RDLHNCQUFNLEdBQU47UUFDSSwwQkFBMEI7UUFDMUIsd0JBQXdCO1FBQ3hCLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFDTCxZQUFDO0FBQUQsQ0ExQ0EsQUEwQ0MsSUFBQTtBQUFBLENBQUM7QUFFRixNQUFNLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRztJQUNyQixJQUFJLEtBQVksQ0FBQztJQUVqQixPQUFPO1FBQ0gsVUFBVSxFQUFFLFVBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxRQUFRO1lBQzdCLEtBQUssR0FBRyxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN2QixHQUFHLENBQUMsVUFBVSxDQUFDLFVBQVMsT0FBTyxFQUFFLE1BQU07Z0JBQ25DLElBQUksUUFBUSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUM7Z0JBQ2hDLElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUM7Z0JBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDeEIsQ0FBQyxDQUFDLENBQUE7WUFFRixRQUFRLEVBQUUsQ0FBQztRQUNmLENBQUM7UUFDRCxLQUFLLEVBQUU7WUFDSCxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDZixLQUFLLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUM3QixDQUFDO1FBQ0QsSUFBSSxFQUFFO1lBQ0YsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ25CLENBQUM7S0FDSixDQUFDO0FBQ04sQ0FBQyxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiLy9UeXBlc2NyaXB0IHNvdXJjZSBzaXRlIHByb2plY3RcclxuXHJcbmludGVyZmFjZSBHZW90YWIge1xyXG4gICAgYWRkaW46IHtcclxuICAgICAgICAvL05hbWUgb2YgdGhlIGFkZC1pblxyXG4gICAgICAgIGFkZGluTmFtZTogRnVuY3Rpb25cclxuICAgIH07XHJcbn1cclxuXHJcbmRlY2xhcmUgY29uc3QgZ2VvdGFiOiBHZW90YWI7XHJcblxyXG4vL2NsYXNzIHRvIGJlIGluaXRpYWxpemVkIGF0IHRoZSBzdGFydCBvZiB0aGUgZ2VvdGFiIGFkZGluIGxpZmVjeWNsZSAtIGluaXRpYWxpemVcclxuY2xhc3MgQWRkaW4ge1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBhcGk7XHJcbiAgICAvL0J1aWxkIHRoZSBET01cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgZGlzcGxheUJ1dHRvbjogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRpc3BsYXlCdXR0b25cIik7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGhpZGVCdXR0b246IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoaWRlQnV0dG9uXCIpO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBkaXNwbGF5T3V0cHV0OiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGlzcGxheU91dHB1dFwiKTtcclxuXHJcbiAgICAvL2luaXRpYWxpemUgYWRkaW4gXHJcbiAgICBjb25zdHJ1Y3RvciAoYXBpKSB7XHJcbiAgICAgICAgdGhpcy5hcGkgPSBhcGk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzaG93T3V0cHV0KCl7XHJcbiAgICAgICAgdGhpcy5kaXNwbGF5T3V0cHV0LmlubmVySFRNTCA9ICdPdXRwdXQgdGV4dCB0byBkaXNwbGF5JztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGhpZGVPdXRwdXQoKXtcclxuICAgICAgICB0aGlzLmRpc3BsYXlPdXRwdXQuaW5uZXJIVE1MID0gJyc7XHJcbiAgICB9XHJcblxyXG4gICAgLy9yZW5kZXIgYWRkaW5cclxuICAgIHJlbmRlciAoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vYWRkIGFueSBldmVudCBoYW5kbGVyc1xyXG4gICAgYWRkRXZlbnRIYW5kbGVycygpIHtcclxuICAgICAgICB0aGlzLmRpc3BsYXlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnNob3dPdXRwdXQsIGZhbHNlKTtcclxuICAgICAgICB0aGlzLmhpZGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhpZGVPdXRwdXQsIGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlbW92ZUV2ZW50SGFuZGxlcnMoKXtcclxuICAgICAgICB0aGlzLmRpc3BsYXlCdXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnNob3dPdXRwdXQsIGZhbHNlKTtcclxuICAgICAgICB0aGlzLmhpZGVCdXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhpZGVPdXRwdXQsIGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICAvL2JsdXIgYWN0aW9ucyAtIGRlLWluaXRpYWxpemUgYWN0aW9uc1xyXG4gICAgdW5sb2FkICgpIHtcclxuICAgICAgICAvL3RoaXMuYWJvcnRDdXJyZW50VGFzaygpO1xyXG4gICAgICAgIC8vcmVtb3ZlIGV2ZW50IGxpc3RlbmVyc1xyXG4gICAgICAgIHRoaXMucmVtb3ZlRXZlbnRIYW5kbGVycygpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZ2VvdGFiLmFkZGluLmFkZGluTmFtZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGxldCBhZGRpbjogQWRkaW47XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBpbml0aWFsaXplOiAoYXBpLCBzdGF0ZSwgY2FsbGJhY2spID0+IHtcclxuICAgICAgICAgICAgYWRkaW4gPSBuZXcgQWRkaW4oYXBpKTtcclxuICAgICAgICAgICAgYXBpLmdldFNlc3Npb24oZnVuY3Rpb24oc2Vzc2lvbiwgc2VydmVyKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdXNlck5hbWUgPSBzZXNzaW9uLnVzZXJOYW1lO1xyXG4gICAgICAgICAgICAgICAgdmFyIHNlcnZlciA9IHNlc3Npb24uc2VydmVyO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coc2VydmVyKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmb2N1czogKCkgPT4ge1xyXG4gICAgICAgICAgICBhZGRpbi5yZW5kZXIoKTtcclxuICAgICAgICAgICAgYWRkaW4uYWRkRXZlbnRIYW5kbGVycygpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYmx1cjogKCkgPT4ge1xyXG4gICAgICAgICAgICBhZGRpbi51bmxvYWQoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59OyJdfQ==
