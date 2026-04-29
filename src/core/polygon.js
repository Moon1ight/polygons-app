export function createRandomPolygon(width, height) {
    const pointsCount = Math.floor(Math.random() * 5) + 3

    // Добавляем отступ от краев
    const margin = 60

    const centerX = margin + Math.random() * (width - margin * 2)
    const centerY = margin + Math.random() * (height - margin * 2)

    const points = []

    for (let i = 0; i < pointsCount; i++) {
        const angle = (Math.PI * 2 * i) / pointsCount
        const radius = 20 + Math.random() * 60

        points.push({
            x: centerX + Math.cos(angle) * radius,
            y: centerY + Math.sin(angle) * radius
        })
    }

    return {
        id: Date.now() + Math.random(),
        points,
        color: `hsl(${Math.random() * 360}, 70%, 60%)`,
        scale: 0,
        isAnimating: true
    }
}