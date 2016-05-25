(function () {
    'use strict';

    angular.module('users')
        .controller('UserController', ['userService', '$mdSidenav', '$mdBottomSheet', '$timeout', '$log', '$scope', UserController]);

    function UserController(userService, $mdSidenav, $mdBottomSheet, $timeout, $log, $scope) {
        var self = this;

        self.selected = null;
        self.users = [];
        self.selectUser = selectUser;
        self.toggleList = toggleUsersList;
        self.makeContact = makeContact;

        userService
            .loadAllUsers()
            .then(function (users) {
                self.users = [].concat(users);
                self.selected = users[0];
            });

        function toggleUsersList() {
            $mdSidenav('left').toggle();
        }

        function selectUser(user) {
            self.selected = angular.isNumber(user) ? $scope.users[user] : user;

        }

        function makeContact(selectedUser) {

            $mdBottomSheet.show({
                controllerAs: "vm",
                templateUrl: './src/users/view/contactSheet.html',
                controller: ['$mdBottomSheet', ContactSheetController],
                parent: angular.element(document.getElementById('content'))
            }).then(function (clickedItem) {
                $log.debug(clickedItem.name + ' clicked!');
            });

            function ContactSheetController($mdBottomSheet) {
                this.user = selectedUser;
                this.items = [
                    {
                        name: 'Phone',
                        icon: 'phone',
                        icon_url: 'assets/svg/phone.svg'
                    },
                    {
                        name: 'Twitter',
                        icon: 'twitter',
                        icon_url: 'assets/svg/twitter.svg'
                    },
                    {
                        name: 'Google+',
                        icon: 'google_plus',
                        icon_url: 'assets/svg/google_plus.svg'
                    },
                    {
                        name: 'Hangout',
                        icon: 'hangouts',
                        icon_url: 'assets/svg/hangouts.svg'
                    }
                ];
                this.contactUser = function (action) {
                    //TODO implement contact process
                    $mdBottomSheet.hide(action);
                };
            }
        }

    }
})();