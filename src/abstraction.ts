// ===============================
// OOP – Abstraction Using Interface
// ===============================

// Defining an interface as a contract.
// Any class implementing this interface MUST provide play(), pause(), and stop() methods.
interface MediaPlayer {
    play(): void;
    pause(): void;
    stop(): void;
}

// Implementation of the MediaPlayer interface.
// This class MUST define all methods declared in the interface.
class MusicPlayer implements MediaPlayer {
    play() {
        console.log(`playing music.....`);
    }

    pause() {
        console.log(`music paused`);
    }

    stop() {
        console.log(`music stopped`);
    }
}

// Creating an object of MusicPlayer and calling its methods
const musicStudio = new MusicPlayer();
musicStudio.play();



// ===============================
// OOP – Abstraction Using Abstract Class
// ===============================

// Abstract class: It provides a blueprint.
// Cannot be instantiated directly and may contain abstract methods.
abstract class MediaPlayerPlus {
    // Abstract methods: must be implemented by any subclass.
    abstract play(): void;
    abstract pause(): void;
    abstract stop(): void;
}

// Subclass providing concrete implementations
// of all abstract methods from MediaPlayerPlus.
class musicPlayerPlus extends MediaPlayerPlus {
    play() {
        console.log(`playing......`);
    }
    pause() {
        console.log(`paused......`);
    }
    stop() {
        console.log(`stopped......`);
    }
}

// Creating an instance of the subclass and calling methods
const music1 = new musicPlayerPlus();
music1.play();
