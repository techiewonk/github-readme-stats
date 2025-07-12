# Continuous Animation Feature

The GitHub Readme Stats card now supports continuous animations that run indefinitely, not just at the start.

## Available Animation Types

- **`pulse`** - Subtle opacity pulsing effect
- **`rotate`** - Continuous rotation animation  
- **`bounce`** - Gentle bouncing motion

## Usage Examples

### Basic Continuous Animation
```markdown
![GitHub Stats](https://github-readme-stats.vercel.app/api?username=anuraghazra&continuous_animation=pulse&show_icons=true)
```

### Different Animation Types
```markdown
<!-- Pulse animation -->
![GitHub Stats](https://github-readme-stats.vercel.app/api?username=anuraghazra&continuous_animation=pulse&show_icons=true)

<!-- Rotate animation -->
![GitHub Stats](https://github-readme-stats.vercel.app/api?username=anuraghazra&continuous_animation=rotate&show_icons=true)

<!-- Bounce animation -->
![GitHub Stats](https://github-readme-stats.vercel.app/api?username=anuraghazra&continuous_animation=bounce&show_icons=true)
```

### Combined with Other Options
```markdown
![GitHub Stats](https://github-readme-stats.vercel.app/api?username=anuraghazra&continuous_animation=pulse&show_icons=true&theme=radical&hide=issues,contribs)
```

## How It Works

- The animation is applied to both icons (when `show_icons=true`) and the rank circle
- Animations run continuously with smooth transitions
- Works with all existing themes and customization options
- Respects the `disable_animations` parameter (if set to true, continuous animations are also disabled)

## Animation Details

- **Pulse**: Opacity varies from 100% to 70% and back, 2-second cycle
- **Rotate**: Full 360-degree rotation, 3-second cycle  
- **Bounce**: Vertical movement with easing, 1.5-second cycle

## Technical Implementation

The feature adds new CSS keyframes and classes:
- `.continuous-pulse` - Applies pulse animation
- `.continuous-rotate` - Applies rotation animation  
- `.continuous-bounce` - Applies bounce animation

All animations use `infinite` duration and appropriate easing functions for smooth, continuous motion. 