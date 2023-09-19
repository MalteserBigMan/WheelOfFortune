export function wheel (element){
    const spinButton = document.querySelector('#spin')
    const wheelElement = element.querySelector('#wheel') 
    const wheelImage = element.querySelector('#wheel-image')
    
    
    const spin = (randomnumber) => {
        console.log(wheelImage)
        spinButton.removeAttribute('disabled')
        wheelElement.textContent = `The wheel spun ${randomnumber}`
        wheelImage.classList.toggle('spin-stop')
    }
    
    console.log('tjena')
    
    spinButton.addEventListener('click', () => {
        spinButton.setAttribute('disabled', true)
        const randomnumber = Math.ceil(Math.random() * 12) 
        wheelImage.classList.add('spin-it')
        const animationTime = 1000 + (randomnumber * 1000 / 12)
        
        setTimeout(() => {spin(randomnumber)}, animationTime)
    })
}
