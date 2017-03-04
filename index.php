<!DOCTYPE html>
<html lang="ru">

<head>
    <?php include "blocks/head.php"; ?>
    <meta name="robots" content="all">
    <?php include "blocks/meta.php"; ?>
    <title>Idealist</title>
    <?php include "blocks/css.php"; ?>
</head>

<body>

<div class="overlay"></div>

<?php include "blocks/header.php"; ?>

<section class="main">
	<div class="container">
	
		<!-- Main banner -->
		<div class="event event_banner">
			<img src="img/banner.jpg" alt="@@" class="event__bg">
			<p class="event__type">Home party</p>
			<p class="event__name">Mad Onna B–Day party</p>
			<p class="event__date">21 DEC <span>&middot;</span> 21:00</p>
			<a href="#" class="button">Join</a>
		</div>
		<!-- // Main banner -->
		
		<!-- Last published -->
		<div class="last-published">
			<p class="heading heading_big last-published__heading">Last published</p>
			<div class="event event_card">
				<img src="img/event1.jpg" alt="@@" class="event__bg">
				<p class="event__type">Home party</p>
				<p class="event__name">Night rave</p>
				<p class="event__date">21 DEC <span>&middot;</span> 21:00</p>
				<div class="event__info">
					<a href="#" class="event__organizer"><span class="avatar avatar_small"><img src="img/avatar1.png" alt="@@"></span>Alexander Longer</a>
					<a href="#" class="event__likes"><img src="img/icon_like.svg" alt="@@">370</a>
					<a href="#" class="event__watches"><img src="img/icon_camera.svg" alt="@@">750</a>
					<a href="#" class="button button_small button_pink">Join</a>
				</div>
			</div>
			<div class="event event_card">
				<img src="img/event2.jpg" alt="@@" class="event__bg">
				<p class="event__type">Home party</p>
				<p class="event__name">DJ Atmos</p>
				<p class="event__date">21 DEC <span>&middot;</span> 21:00</p>
				<div class="event__info">
					<a href="#" class="event__organizer"><span class="avatar avatar_small"><img src="img/avatar1.png" alt="@@"></span>Alexander Longer</a>
					<a href="#" class="event__likes"><img src="img/icon_like.svg" alt="@@">370</a>
					<a href="#" class="event__watches"><img src="img/icon_camera.svg" alt="@@">750</a>
					<a href="#" class="button button_small button_pink">Join</a>
				</div>
			</div>
			<div class="event event_card">
				<img src="img/event3.jpg" alt="@@" class="event__bg">
				<p class="event__type">Home party</p>
				<p class="event__name">New album Kira Wong</p>
				<p class="event__date">21 DEC <span>&middot;</span> 21:00</p>
				<div class="event__info">
					<a href="#" class="event__organizer"><span class="avatar avatar_small"><img src="img/avatar1.png" alt="@@"></span>Alexander Longer</a>
					<a href="#" class="event__likes"><img src="img/icon_like.svg" alt="@@">370</a>
					<a href="#" class="event__watches"><img src="img/icon_camera.svg" alt="@@">750</a>
					<a href="#" class="button button_small button_pink">Join</a>
				</div>
			</div>
			<div class="event event_card">
				<img src="img/event4.jpg" alt="@@" class="event__bg">
				<p class="event__type">Home party</p>
				<p class="event__name">Night rave</p>
				<p class="event__date">21 DEC <span>&middot;</span> 21:00</p>
				<div class="event__info">
					<a href="#" class="event__organizer"><span class="avatar avatar_small"><img src="img/avatar1.png" alt="@@"></span>Alexander Longer</a>
					<a href="#" class="event__likes"><img src="img/icon_like.svg" alt="@@">370</a>
					<a href="#" class="event__watches"><img src="img/icon_camera.svg" alt="@@">750</a>
					<a href="#" class="button button_small button_pink">Join</a>
				</div>
			</div>
			<a href="#" class="last-published__seemore"><span></span><br>See more</a>
		</div>
		<!-- // Last published -->
		
		<!-- Map search -->
		<div class="map-search">
			<img src="img/planet.jpg" alt="@@" class="map-search__bg">
			<p class="heading map-search__heading">Map search</p>
			<a href="#" class="button button_pink">Find</a>
		</div>
		<!-- // Map search -->
		
		<!-- Top organizers  -->
		<div class="organizers">
			<p class="heading heading_big organizers__heading">Top organizers</p>
			<ul class="organizers__list scrollbar-inner">
				<li>
					<a href="#" class="organizers__person"><span class="avatar"><img src="img/avatar1.png" alt="@@"></span><span class="number active"></span>Dmitriy Kovalev<span class="eventcount">753 events</span></a>
				</li>
				<li>
					<a href="#" class="organizers__person"><span class="avatar"><img src="img/avatar2.png" alt="@@"></span><span class="number active">1</span>Oxana Polishuk<span class="eventcount">521 events</span></a>
				</li>
				<li>
					<a href="#" class="organizers__person"><span class="avatar"><img src="img/avatar3.png" alt="@@"></span><span class="number"></span>Sergey Goncharov<span class="eventcount">329 events</span></a>
				</li>
				<li>
					<a href="#" class="organizers__person"><span class="avatar"><img src="img/avatar4.png" alt="@@"></span><span class="number active">7</span>Dmitriy Kunica<span class="eventcount">753 events</span></a>
				</li>
			</ul>
			<div class="organizers__field">
				<input type="text" placeholder="Search account">
				<button><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 17 17" fill="#5c1bbf" fill-rule="evenodd"><path data-name="Фигура 2" d="M493.156,51.688h-0.769l-0.273-.263a6.334,6.334,0,1,0-.681.681l0.263,0.272v0.769L496.561,58l1.45-1.449Zm-5.839,0A4.378,4.378,0,1,1,491.7,47.31,4.372,4.372,0,0,1,487.317,51.688Z" transform="translate(-481 -41)"/></svg></button>
			</div>
		</div>
		<!-- // Top organizers  -->
		
		<!-- Most popular -->
		<p class="heading heading_big most-popular__heading">Most popular</p>
		
		<div class="event event_card tmp1">
			<img src="img/event5.jpg" alt="@@" class="event__bg">
			<p class="event__type">Home party</p>
			<p class="event__name">Man in black</p>
			<p class="event__date">21 DEC <span>&middot;</span> 21:00</p>
			<div class="event__info">
				<a href="#" class="event__organizer"><span class="avatar avatar_small"><img src="img/avatar1.png" alt="@@"></span>Alexander Longer</a>
				<a href="#" class="event__likes"><img src="img/icon_like.svg" alt="@@">370</a>
				<a href="#" class="event__watches"><img src="img/icon_camera.svg" alt="@@">750</a>
				<a href="#" class="button button_small button_pink">Join</a>
			</div>
		</div>
		
		<div class="event event_bigcard tmp2">
			<img src="img/event6.jpg" alt="@@" class="event__bg">
			<p class="event__type">Home party</p>
			<p class="event__name">Night rave</p>
			<p class="event__date">21 DEC <span>&middot;</span> 21:00</p>
			<div class="event__info">
				<a href="#" class="event__organizer"><span class="avatar avatar_small"><img src="img/avatar1.png" alt="@@"></span>Alexander Longer</a>
				<a href="#" class="event__likes"><img src="img/icon_like.svg" alt="@@">370</a>
				<a href="#" class="event__watches"><img src="img/icon_camera.svg" alt="@@">750</a>
				<a href="#" class="button button_small button_pink active">Joined</a>
			</div>
		</div>
		
		<div class="event event_card tmp3">
			<img src="img/event1.jpg" alt="@@" class="event__bg">
			<p class="event__type">Home party</p>
			<p class="event__name">Night rave</p>
			<p class="event__date">21 DEC <span>&middot;</span> 21:00</p>
			<div class="event__info">
				<a href="#" class="event__organizer"><span class="avatar avatar_small"><img src="img/avatar1.png" alt="@@"></span>Alexander Longer</a>
				<a href="#" class="event__likes"><img src="img/icon_like.svg" alt="@@">370</a>
				<a href="#" class="event__watches"><img src="img/icon_camera.svg" alt="@@">750</a>
				<a href="#" class="button button_small button_pink">Join</a>
			</div>
		</div>
		
		<div class="event event_card tmp4">
			<img src="img/event7.jpg" alt="@@" class="event__bg">
			<p class="event__type">Home party</p>
			<p class="event__name">Night rave</p>
			<p class="event__date">21 DEC <span>&middot;</span> 21:00</p>
			<div class="event__info">
				<a href="#" class="event__organizer"><span class="avatar avatar_small"><img src="img/avatar1.png" alt="@@"></span>Alexander Longer</a>
				<a href="#" class="event__likes"><img src="img/icon_like.svg" alt="@@">370</a>
				<a href="#" class="event__watches"><img src="img/icon_camera.svg" alt="@@">750</a>
				<a href="#" class="button button_small button_pink">Join</a>
			</div>
		</div>
		
		<div class="event event_card tmp5">
			<img src="img/event8.jpg" alt="@@" class="event__bg">
			<p class="event__type">Home party</p>
			<p class="event__name">Night rave</p>
			<p class="event__date">21 DEC <span>&middot;</span> 21:00</p>
			<div class="event__info">
				<a href="#" class="event__organizer"><span class="avatar avatar_small"><img src="img/avatar1.png" alt="@@"></span>Alexander Longer</a>
				<a href="#" class="event__likes"><img src="img/icon_like.svg" alt="@@">370</a>
				<a href="#" class="event__watches"><img src="img/icon_camera.svg" alt="@@">750</a>
				<a href="#" class="button button_small button_pink">Join</a>
			</div>
		</div>
		
		<div class="event event_specialcard tmp6">
			<img src="img/event11.jpg" alt="@@" class="event__bg">
			<p class="event__date">21.12.2016</p>
			<p class="event__name">DJ FiLL
				<span>Magnoos</span>
				<span>Vango</span>
				<span>Kick aka Nic</span></p>
			<p class="event__time">21:00</p>
			<p class="event__place">Club <b>Aura</b></p>
			<div class="event__info">
				<a href="#" class="event__organizer"><span class="avatar avatar_small"><img src="img/avatar1.png" alt="@@"></span>Alexander Longer</a>
				<a href="#" class="event__likes"><img src="img/icon_like.svg" alt="@@">370</a>
				<a href="#" class="event__watches"><img src="img/icon_camera.svg" alt="@@">750</a>
				<a href="#" class="button button_small button_pink">Join</a>
			</div>
		</div>
		
		<div class="event event_card tmp7">
			<img src="img/event1.jpg" alt="@@" class="event__bg">
			<p class="event__type">Home party</p>
			<p class="event__name">Night rave</p>
			<p class="event__date">21 DEC <span>&middot;</span> 21:00</p>
			<div class="event__info">
				<a href="#" class="event__organizer"><span class="avatar avatar_small"><img src="img/avatar1.png" alt="@@"></span>Alexander Longer</a>
				<a href="#" class="event__likes"><img src="img/icon_like.svg" alt="@@">370</a>
				<a href="#" class="event__watches"><img src="img/icon_camera.svg" alt="@@">750</a>
				<a href="#" class="button button_small button_pink">Join</a>
			</div>
		</div>
		
		<div class="event event_bigcard tmp8">
			<img src="img/event9.jpg" alt="@@" class="event__bg">
			<p class="event__type">Home party</p>
			<p class="event__name">Night rave</p>
			<p class="event__date">21 DEC <span>&middot;</span> 21:00</p>
			<div class="event__info">
				<a href="#" class="event__organizer"><span class="avatar avatar_small"><img src="img/avatar1.png" alt="@@"></span>Alexander Longer</a>
				<a href="#" class="event__likes"><img src="img/icon_like.svg" alt="@@">370</a>
				<a href="#" class="event__watches"><img src="img/icon_camera.svg" alt="@@">750</a>
				<a href="#" class="button button_small button_pink">Join</a>
			</div>
		</div>
		
		<div class="event event_card tmp9">
			<img src="img/event10.jpg" alt="@@" class="event__bg">
			<p class="event__type">Home party</p>
			<p class="event__name">Night rave</p>
			<p class="event__date">21 DEC <span>&middot;</span> 21:00</p>
			<div class="event__info">
				<a href="#" class="event__organizer"><span class="avatar avatar_small"><img src="img/avatar1.png" alt="@@"></span>Alexander Longer</a>
				<a href="#" class="event__likes"><img src="img/icon_like.svg" alt="@@">370</a>
				<a href="#" class="event__watches"><img src="img/icon_camera.svg" alt="@@">750</a>
				<a href="#" class="button button_small button_pink">Join</a>
			</div>
		</div>
		
		<div class="event event_card tmp10">
			<img src="img/event2.jpg" alt="@@" class="event__bg">
			<p class="event__type">Home party</p>
			<p class="event__name">Night rave</p>
			<p class="event__date">21 DEC <span>&middot;</span> 21:00</p>
			<div class="event__info">
				<a href="#" class="event__organizer"><span class="avatar avatar_small"><img src="img/avatar1.png" alt="@@"></span>Alexander Longer</a>
				<a href="#" class="event__likes"><img src="img/icon_like.svg" alt="@@">370</a>
				<a href="#" class="event__watches"><img src="img/icon_camera.svg" alt="@@">750</a>
				<a href="#" class="button button_small button_pink">Join</a>
			</div>
		</div>
		
		<div class="event event_card tmp11">
			<img src="img/event4.jpg" alt="@@" class="event__bg">
			<p class="event__type">Home party</p>
			<p class="event__name">Night rave</p>
			<p class="event__date">21 DEC <span>&middot;</span> 21:00</p>
			<div class="event__info">
				<a href="#" class="event__organizer"><span class="avatar avatar_small"><img src="img/avatar1.png" alt="@@"></span>Alexander Longer</a>
				<a href="#" class="event__likes"><img src="img/icon_like.svg" alt="@@">370</a>
				<a href="#" class="event__watches"><img src="img/icon_camera.svg" alt="@@">750</a>
				<a href="#" class="button button_small button_pink">Join</a>
			</div>
		</div>
		
		<div class="event event_card tmp12">
			<img src="img/event5.jpg" alt="@@" class="event__bg">
			<p class="event__type">Home party</p>
			<p class="event__name">Night rave</p>
			<p class="event__date">21 DEC <span>&middot;</span> 21:00</p>
			<div class="event__info">
				<a href="#" class="event__organizer"><span class="avatar avatar_small"><img src="img/avatar1.png" alt="@@"></span>Alexander Longer</a>
				<a href="#" class="event__likes"><img src="img/icon_like.svg" alt="@@">370</a>
				<a href="#" class="event__watches"><img src="img/icon_camera.svg" alt="@@">750</a>
				<a href="#" class="button button_small button_pink">Join</a>
			</div>
		</div>
		<!-- // Most popular -->
		
	</div>
</section>

<?php include "blocks/footer.php"; ?>

<?php include "blocks/forms.php"; ?>
<?php include "blocks/scripts.php"; ?>
</body>
</html>