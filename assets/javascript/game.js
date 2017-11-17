$(document).ready(function() {

var players = [

	{name: "murderer",
	health: 215,
	attack: 10,
	counter: 10},

	{name: "hitman",
	health: 220,
	attack: 12,
	counter: 12},

	{name: "assassin",
	health: 185,
	attack: 18,
	counter: 18},

	{name: "slayer",
	health: 180,
	attack: 15,
	counter: 15},

	{name: "terrorist",
	health: 230,
	attack: 20,
	counter: 20},

	{name: "killer",
	health: 200,
	attack: 15,
	counter: 15},
];

var player;
var enemy;

for (var i = 0; i < players.length; i++) {
	$('.top').append('<div class="character" id="' + i + '"></div>');
	$('#' + i).append('<img>');
	$('#' + i + ' img').attr("src", "assets/images/" + players[i].name + ".jpg");
	$('#' + i).append("<button>Select</button");
	$('#' + i + ' button').attr("id", i);
	$('#' + i).append("<p></p>");
	$('#' + i + ' p').append(players[i].name + "<br>health: " + players[i].health + "<br>attack: " + players[i].attack);
}

//$("#myHealth").append("none")
//$("#enemyHealth").append("none")


//for (var i = 0; i < players.length; i++) {
//	var i = 0;
console.log(player);
var sel;

	$('button').click(function () {
		if (player == undefined) {
			sel = this.id;
			console.log(sel);
			selectPlayer(sel);
		}
	});


//}

//for (var i = 0; i < players.length; i++) {
//	$('button.' + i).click(function () {selectEnemy(i)});
//}
var btn;
function selectPlayer(sel) {
	player = players[sel];
	console.log("player " + player.name)
	//$('#' + sel).detach();
	$('#myHealth').append(player.health);
	$('#attack').append(player.attack);

var j = 0;


var en;
var enemy;

	$('button').click(function () {
		en = this.id;
		console.log(en + " " + sel);
		if (en != sel) {selectEnemy(en)};

function selectEnemy(en) {
	enemy = players[en];
	console.log("enemy " + enemy.name)
	//$('#' + sel).detach();
	var object2 = $('#' + en).detach();
	$('#currentEnemy').html(object2);
	$('#currentEnemy button').remove();
	$('#theirHealth').html("Enemy health: " + enemy.health);
}






console.log("ENEMY: " + enemy.name);
	});


		btn = $('#' + sel + ' button')


var newAttack = 0;

	$(btn).click(function() {
	newAttack = newAttack + player.attack;

		if (enemy.health > 0) {
			attack(player, enemy, newAttack);
		} else {
			console.log("DEAD!");
			$('#currentEnemy').html("You already killed " + enemy.name + ". Select a new enemy.");
			j++;
		}

		if (player.health <= 0) {
			$('#currentPlayer').html(player.name + " was killed. Game over.")
		}

		console.log("j " + j);

		if (j >= players.length - 1) {
			$('#currentEnemy').html("You won! Reload to play again");
		}
	});


	var object = $('#' + sel).detach();

	$('#currentPlayer').html(object);
	$('#currentPlayer button').html("Attack")
	



function attack(player, enemy, newAttack) {
	console.log(newAttack)
	enemy.health = enemy.health - newAttack;
	player.health = player.health - enemy.counter;
	//update stats
	$('#myHealth').html("Health remaining: " + player.health);
	$('#theirHealth').html("Enemy health: " + enemy.health);
	var total = newAttack + player.attack;
	$('#attack').html("Your attack power: " + total);
}
}
});