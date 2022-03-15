const findMyLocalization = () => {

  const status = document.querySelector('.status');

  const success = (position) => {
    console.log(position)
  }
  
  const error = () => {
    status.textContent = 'Sem acesso a sua localização'
  }

  navigator.geolocation.getCurrentPosition(success, error)
}

document.querySelector('.find-state');addEventListener('click', findMyLocalization )