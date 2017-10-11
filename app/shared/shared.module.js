import angular from 'angular';
import playerStats from './player.stats.directive';
module.exports = angular.module('crossoverapp.shared',[])
.directive('playerStats', playerStats)
//.directive('inventory', inventory)
//.directive('currentAuction', currentAuction)
.name
;
