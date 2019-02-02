---
layout: post
title: Introducing micro:watch!
categories: microbit watch
---
The past few days, I've been working on an awesome hardware project: the micro:watch. It's a simple watch with the micro:bit, with clock, date, thermometer, compass, health, calculator, stopwatch and timer apps, and more coming soon. Here's what you need to build it:
* A micro:bit
* Duct tape
* AA Battery holder for micro:bit ([I used this one](https://www.sparkfun.com/products/14299)) and 2 AA batteries
* Velcro strip
* Micro-usb cable

## 1. Get the software

The code I used is downloadable [here](https://github.com/kyleplo/micro-watch/archive/master.zip).

Plug the USB into the micro:bit, and load the hex file on.

## 2. Build the watch

Center the battery pack on 6" long piece of tape. Put the micro:bit on top, and fold the tape over. Cut off extra, so the screen is visible, and don't block the USB port, in case you want to update the software. Then tape a reasonable amount of Velcro to the back, and wear it as a watch!

## Usage

* Press either button to turn on
* Press B to switch apps: clock, date, thermometer, compass, health, calculator, stopwatch and timer
### Clock

Press A to set time. Wait for the instructions to scroll on the screen, then use A to change the current parameter, and B to submit. 24-hour time.
### Date

Setting is the same as with time.
### Thermometer

Self-explainatory. Unit is °C.
### Compass

The arrow points north. Sometimes it will ask to calibrate the compass. See [the micro:bit website](https://support.microbit.org/support/solutions/articles/19000008874).
### Health

Press A to start/stop. Auto-stops at midnight Not really any perticular unit...
### Calculator

Press A to start. Then A to select number, B to submit.
### Stopwatch

Press A to start/stop.
### Timer

Press A to set timer, in minutes. Screen flashes when done.
