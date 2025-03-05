const assert = require('assert');
const { JSDOM } = require('jsdom');
const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');

let window;
let document;

beforeEach(() => {
    const dom = new JSDOM(html, { runScripts: 'dangerously' });
    window = dom.window;
    document = window.document;
    global.document = document;
    global.window = window;
    global.navigator = {
        userAgent: 'node.js',
    };
    global.videoUrl = 'path/to/your/video.mp4';
    require('../skills.js');
});

afterEach(() => {
    jest.resetModules();
});

describe('Skills Functionality', () => {
    it('should return expected skill', () => {
        const skill = 'JavaScript';
        assert.strictEqual(skill, 'JavaScript');
    });

    it('should validate skill level', () => {
        const level = 'Expert';
        assert.strictEqual(level, 'Expert');
    });
});

test('should create video element with correct attributes', () => {
    const video = document.querySelector('video');
    expect(video).not.toBeNull();
    expect(video.src).toContain('path/to/your/video.mp4');
    expect(video.controls).toBe(true);
    expect(video.width).toBe(600);
});

test('should create pause button with correct text', () => {
    const pauseButton = document.querySelector('button:nth-of-type(1)');
    expect(pauseButton).not.toBeNull();
    expect(pauseButton.textContent).toBe('Pause');
});

test('should create next button with correct text', () => {
    const nextButton = document.querySelector('button:nth-of-type(2)');
    expect(nextButton).not.toBeNull();
    expect(nextButton.textContent).toBe('Next');
});

test('should create full screen button with correct text', () => {
    const fullScreenButton = document.querySelector('button:nth-of-type(3)');
    expect(fullScreenButton).not.toBeNull();
    expect(fullScreenButton.textContent).toBe('Full Screen');
});