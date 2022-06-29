const games = [
    {
        image:'./assets/images/mobile-legends.png',
        title:'Mobile Legends',
        platform:'Mobile',
        item:'200 Diamonds',
        price:'Rp 290.000',
        status:'Pending',
    },
    {
        image:'./assets/images/call-of-duty.png',
        title:'Call Of Duty',
        platform:'Mobile',
        item:'500 Gold',
        price:'Rp 740.000',
        status:'Success',
    },
    {
        image:'./assets/images/clash-of-clans.png',
        title:'Clash Of Clans',
        platform:'Mobile',
        item:'100 Diamonds',
        price:'Rp 120.000',
        status:'Failed',
    },
    {
        image:'./assets/images/the-royale.png',
        title:'The Royale',
        platform:'Mobile',
        item:'225 Gold',
        price:'Rp 200.000',
        status:'Pending',
    },
    {
        image:'./assets/images/call-of-duty.png',
        title:'Call Of Duty',
        platform:'Mobile',
        item:'550 Gold',
        price:'Rp 740.000',
        status:'Success',
    },
    {
        image:'./assets/images/mobile-legends.png',
        title:'Mobile Legends',
        platform:'Mobile',
        item:'200 Diamonds',
        price:'Rp 290.000',
        status:'Pending',
    },
];

const dataTable = document.getElementById('data-game');

const dataGame = games.map((game) => `<tr class="text-center align-middle fw-500 text-nowrap">
                                <td>
                                    <div class="d-flex gap-2 align-items-center">
                                        <img src="${game.image}" alt="${game.title}"
                                            class="rounded-4" width="80" height="60">
                                        <div class="d-flex flex-column gap-1 text-start">
                                            <p class="color-primary game-title">${game.title}</p>
                                            <p class="color-secondary fw-normal fs-12">${game.platform}</p>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    ${game.item}
                                </td>
                                <td>
                                    ${game.price}
                                </td>
                                <td>
                                    <p class="d-flex gap-1 align-items-center justify-content-center">
                                        <i class="fa-solid fa-circle status ${game.status.toLowerCase()}"></i>
                                        ${game.status}
                                    </p>
                                </td>
                                <td>
                                    <a href="#" class="btn-pill rounded-pill">
                                        Details
                                    </a>
                                </td>
                            </tr>`);

                            dataTable.innerHTML = dataGame.join('');

document.getElementById('sidebarCollapseDefault').addEventListener('click', function sidebarCollapse(){
    document.getElementById('nav-sidebar').classList.toggle('active');
    document.getElementById('main-content').classList.toggle('active');
});