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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzb3VyY2UvYWRkaW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQSxnQ0FBZ0M7QUFXaEMsaUZBQWlGO0FBQ2pGO0lBT0ksbUJBQW1CO0lBQ25CLGVBQWEsR0FBRztRQU5oQixlQUFlO1FBQ0Usa0JBQWEsR0FBZ0IsUUFBUSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUN0RSxlQUFVLEdBQWdCLFFBQVEsQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDMUUsa0JBQWEsR0FBZ0IsUUFBUSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUl6RSxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztJQUNuQixDQUFDO0lBRU8sMEJBQVUsR0FBbEI7UUFDSSxnRUFBZ0U7UUFDaEUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEdBQUcsd0JBQXdCLENBQUM7SUFDNUQsQ0FBQztJQUVPLDBCQUFVLEdBQWxCO1FBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ3RDLENBQUM7SUFFRCxjQUFjO0lBQ2Qsc0JBQU0sR0FBTjtJQUVBLENBQUM7SUFFRCx3QkFBd0I7SUFDeEIsZ0NBQWdCLEdBQWhCO1FBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNyRSxJQUFJLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3RFLENBQUM7SUFFTyxtQ0FBbUIsR0FBM0I7UUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3hFLElBQUksQ0FBQyxVQUFVLENBQUMsbUJBQW1CLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDekUsQ0FBQztJQUVELHNDQUFzQztJQUN0QyxzQkFBTSxHQUFOO1FBQ0ksMEJBQTBCO1FBQzFCLHdCQUF3QjtRQUN4QixJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBQ0wsWUFBQztBQUFELENBM0NBLEFBMkNDLElBQUE7QUFBQSxDQUFDO0FBRUYsTUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUc7SUFDckIsSUFBSSxLQUFZLENBQUM7SUFFakIsT0FBTztRQUNILFVBQVUsRUFBRSxVQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsUUFBUTtZQUM3QixLQUFLLEdBQUcsSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDdkIsR0FBRyxDQUFDLFVBQVUsQ0FBQyxVQUFTLE9BQU8sRUFBRSxNQUFNO2dCQUNuQyxJQUFJLFFBQVEsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDO2dCQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWEsUUFBVSxDQUFDLENBQUM7Z0JBQ3JDLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBVyxNQUFRLENBQUMsQ0FBQztZQUNyQyxDQUFDLENBQUMsQ0FBQTtZQUVGLFFBQVEsRUFBRSxDQUFDO1FBQ2YsQ0FBQztRQUNELEtBQUssRUFBRTtZQUNILEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNmLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQzdCLENBQUM7UUFDRCxJQUFJLEVBQUU7WUFDRixLQUFLLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDbkIsQ0FBQztLQUNKLENBQUM7QUFDTixDQUFDLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIvL1R5cGVzY3JpcHQgc291cmNlIHNpdGUgcHJvamVjdFxyXG5cclxuaW50ZXJmYWNlIEdlb3RhYiB7XHJcbiAgICBhZGRpbjoge1xyXG4gICAgICAgIC8vTmFtZSBvZiB0aGUgYWRkLWluXHJcbiAgICAgICAgYWRkaW5OYW1lOiBGdW5jdGlvblxyXG4gICAgfTtcclxufVxyXG5cclxuZGVjbGFyZSBjb25zdCBnZW90YWI6IEdlb3RhYjtcclxuXHJcbi8vY2xhc3MgdG8gYmUgaW5pdGlhbGl6ZWQgYXQgdGhlIHN0YXJ0IG9mIHRoZSBnZW90YWIgYWRkaW4gbGlmZWN5Y2xlIC0gaW5pdGlhbGl6ZVxyXG5jbGFzcyBBZGRpbiB7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGFwaTtcclxuICAgIC8vQnVpbGQgdGhlIERPTVxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBkaXNwbGF5QnV0dG9uOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGlzcGxheUJ1dHRvblwiKTtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgaGlkZUJ1dHRvbjogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhpZGVCdXR0b25cIik7XHJcbiAgICBwdWJsaWMgZGlzcGxheU91dHB1dDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlzcGxheU91dHB1dCcpO1xyXG5cclxuICAgIC8vaW5pdGlhbGl6ZSBhZGRpbiBcclxuICAgIGNvbnN0cnVjdG9yIChhcGkpIHtcclxuICAgICAgICB0aGlzLmFwaSA9IGFwaTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNob3dPdXRwdXQoKXtcclxuICAgICAgICAvLyBsZXQgZGlzcGxheU91dHB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXNwbGF5T3V0cHV0Jyk7XHJcbiAgICAgICAgdGhpcy5kaXNwbGF5T3V0cHV0LmlubmVySFRNTCA9ICdPdXRwdXQgdGV4dCB0byBkaXNwbGF5JztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGhpZGVPdXRwdXQoKXtcclxuICAgICAgICB0aGlzLmRpc3BsYXlPdXRwdXQuaW5uZXJIVE1MID0gJyc7XHJcbiAgICB9XHJcblxyXG4gICAgLy9yZW5kZXIgYWRkaW5cclxuICAgIHJlbmRlciAoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vYWRkIGFueSBldmVudCBoYW5kbGVyc1xyXG4gICAgYWRkRXZlbnRIYW5kbGVycygpIHtcclxuICAgICAgICB0aGlzLmRpc3BsYXlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnNob3dPdXRwdXQsIGZhbHNlKTtcclxuICAgICAgICB0aGlzLmhpZGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhpZGVPdXRwdXQsIGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlbW92ZUV2ZW50SGFuZGxlcnMoKXtcclxuICAgICAgICB0aGlzLmRpc3BsYXlCdXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnNob3dPdXRwdXQsIGZhbHNlKTtcclxuICAgICAgICB0aGlzLmhpZGVCdXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhpZGVPdXRwdXQsIGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICAvL2JsdXIgYWN0aW9ucyAtIGRlLWluaXRpYWxpemUgYWN0aW9uc1xyXG4gICAgdW5sb2FkICgpIHtcclxuICAgICAgICAvL3RoaXMuYWJvcnRDdXJyZW50VGFzaygpO1xyXG4gICAgICAgIC8vcmVtb3ZlIGV2ZW50IGxpc3RlbmVyc1xyXG4gICAgICAgIHRoaXMucmVtb3ZlRXZlbnRIYW5kbGVycygpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZ2VvdGFiLmFkZGluLmFkZGluTmFtZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGxldCBhZGRpbjogQWRkaW47XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBpbml0aWFsaXplOiAoYXBpLCBzdGF0ZSwgY2FsbGJhY2spID0+IHtcclxuICAgICAgICAgICAgYWRkaW4gPSBuZXcgQWRkaW4oYXBpKTtcclxuICAgICAgICAgICAgYXBpLmdldFNlc3Npb24oZnVuY3Rpb24oc2Vzc2lvbiwgc2VydmVyKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdXNlck5hbWUgPSBzZXNzaW9uLnVzZXJOYW1lO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYHVzZXJOYW1lOiAke3VzZXJOYW1lfWApO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYHNlcnZlcjogJHtzZXJ2ZXJ9YCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZm9jdXM6ICgpID0+IHtcclxuICAgICAgICAgICAgYWRkaW4ucmVuZGVyKCk7XHJcbiAgICAgICAgICAgIGFkZGluLmFkZEV2ZW50SGFuZGxlcnMoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJsdXI6ICgpID0+IHtcclxuICAgICAgICAgICAgYWRkaW4udW5sb2FkKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufTsiXX0=
