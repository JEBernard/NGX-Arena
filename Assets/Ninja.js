#pragma strict
var animator:Animator;

function Start () {
	animator = GetComponent("Animator");
}

function FixedUpdate () {
	MoveCharacter();
}

function MoveCharacter() {
	if (Input.GetKey(KeyCode.W)) {
	animator.SetBool("jump", true); 
	}else{
		animator.SetBool("jump", false); 
	}
	if (Input.GetKey(KeyCode.S)) {
		animator.SetBool("slide", true); 
	} else {
		animator.SetBool("slide", false); 
	}
}