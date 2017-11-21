$(document).ready(function() {

var players = [

	{name: "murderer",
	health: 260,
	attack: 10,
	counter: 10},

	{name: "hitman",
	health: 265,
	attack: 20,
	counter: 20},

	{name: "assassin",
	health: 240,
	attack: 15,
	counter: 15},

	{name: "slayer",
	health: 235,
	attack: 12,
	counter: 12},

	{name: "terrorist",
	health: 270,
	attack: 18,
	counter: 18},

	{name: "killer",
	health: 250,
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


var sel;

	$('button').click(function () {
		if (player == undefined) {
			sel = this.id;
			selectPlayer(sel);
		}
	});



var btn;
function selectPlayer(sel) {
	player = players[sel];
	$('#myHealth').append(player.health);
	$('#attack').append(player.attack);

var j = 0;


var en;
var enemy;

	$('button').click(function () {
		en = this.id;
		if (en != sel) {selectEnemy(en)};

function selectEnemy(en) {
	enemy = players[en];
	var object2 = $('#' + en).detach();
	$('#currentEnemy').html(object2);
	$('#currentEnemy button').remove();
	$('#theirHealth').html("Enemy health: " + enemy.health);
}

	});


		btn = $('#' + sel + ' button')


var newAttack = 0;

	$(btn).click(function() {
	

		if (enemy.health > 0) {
			newAttack = newAttack + player.attack;
			attack(player, enemy, newAttack);
		} else {
			$('#currentEnemy').html("You already killed " + enemy.name + ". Select a new enemy.");
			j++;
		}

		if (player.health <= 0) {
			$('#currentPlayer').html(player.name + " was killed. Game over.")
		}

		if (j >= players.length - 1) {
			$('#currentEnemy').html("You won! Reload to play again");
		}
	});


	var object = $('#' + sel).detach();

	$('#currentPlayer').html(object);
	$('#currentPlayer button').html("Attack")
	


function attack(player, enemy, newAttack) {
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