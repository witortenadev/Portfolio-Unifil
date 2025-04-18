## Bits and Bytes
A **bit** is a value that can be on or off, in other words, either 1 or 0, when we talk about **bytes**, we are talking about 8 bits.

With two bits we can express up to 4 values, with 3 bits we can express up to 8 values and so on... 
The more bits you have, increases the amount of different values you can express exponentially. 

|Bits|Values|
|---|---|
|1|2|
|2|4|
|3|8|
|4|16|
|8|256|
|16|65,536|
|32|~4.29 billion|
|64|~18 quintillion|
## Processor Architecture
## RISC and CISC
They are types of processor architecture and represent the instruction set of the machine.
**RISC** - Reduced Instruction Set Computer
- Smartphones, embedded systems
**CISC** - Complex Instruction Set Computer
- Personal Computers, notebooks
### x86 x32 and x64
These are examples of different processor architectures, these generally refer to the amount of memory it can address.
- **x86** - 32 bit architecture
- **x32** - 32 bit architecture (slightly more performant than x86)
- **x64** - 64 bit architecture

x64(64 bit) processors can address more bits in memory when compared to x32(32 bit) processors due to the more values you can express with a 64 bit architecture.
- **32 bit processors** can address up to **4GB** of information in memory.
- **64 bit processors** can address up to **16 Billion GB** of information in memory.

This difference in processor architecture impacts the following: 
- **OS** - How the **OS(operating system)** will work with the given processor.
- **Driver** - Driver software for all hardware components that will be used.
- **Application** - Applications may need to be reworked to be compatible with a different processor architecture.
## ALU
The **Arithmetic and Logic Unit** makes arithmetic operations.
It is part of the **CPU(Central Processing Unit)** and handles all basic math (add, subtract, AND, OR, shift operations, etc.)
## Logic Gates
**Logic Gates** are the core of any modern computer, they allow for logic to be executed by passing electricity or by holding it in place.

Many different logic gates exist. Here are the three most commonly used gates. They are often combined to create more complex logic operations.

**AND** - The and gate returns 1 only when we give two active inputs to it.
**OR** - The or gate returns 1 when one or more inputs are on.
**NOT** - The not gate will always return the opposite of the given value.

Here's a few more complicated or related logic gates:
- **NAND** - AND with a not
- **NOR** - Or with a not
- **XOR** - Exclusive or, only one must be active to return 1

|A|B|AND|OR|XOR|
|---|---|---|---|---|
|0|0|0|0|0|
|0|1|0|1|1|
|1|0|0|1|1|
|1|1|1|1|0|

Every computer chip is made of several of these different logic gates in order to work logically.

## PC Hardware Overview
### Peripherals
These are external components that extend the functionality of the PC(personal computer).
- Input
	- Keyboard
	- Mouse
- Output
	- Monitor
	- Speaker
- Any other external devices

### Components
These are the core components of a **PC(Personal Computer)**, and they are generally divided by their purpose, for example, a **GPU(Graphics Processing Unit)** is a **PCB(Printed Circuit Board)** that takes care of all major graphical processes for the computer.

---

*Visual representation of the components inside a computer*

![[Pasted image 20250412195939.png]]

---

Other components like **RAM (Random Access Memory)** store data temporarily while the computer is on. This data is erased once the computer is turned off.

Other examples of components that save information in memory are the **HD(Hard Drive)** and the **SSD(Solid State Drive)**, but the difference is that these components can record information even when the computer is off. 

Here's a list of the main components inside of a modern computer:
- **GPU** - Graphics Processing Unit
- **CPU** - Central Processing Unit
- **PSU** - Power Supply Unit
- **RAM** - Random Access Memory
- **Motherboard** - Holds and connects the other components together
- **HD** - Hard Drive
- **SSD** - Solid State Drive(Has the same function as the HD, but is generally faster to transmit data)
## Computer Generations
There are five generations in computer history, each marked by significant technological advancements in hardware and software.
### First Generation (1940s-1950s)
Utilized vacuum tubes for circuitry and magnetic drums for memory.
An example is the **ENIAC**, commonly referenced as the first digital electronic computer, computers like the **ENIAC** were large and expensive, they also generated a lot of heat to work properly.
- Robust and Expensive
### Second Generation (1950s-1960s)
Replaced the vacuum tubes with transistors, they were smaller in size and allowed for more energy-efficient computers.
Examples of these machines are the **IBM** computers.
- Smaller
- Cheaper
- More heat efficient
### Third Generation (1960s-1970s)
Employed **IC's**(integrated circuits), combining multiple transistors on a single chip, increasing speed and efficiency like never before.
Another example from **IBM** is the **IBM System/360**.
- Faster
- More storage (Memory)
### Fourth Generation (1970s-1980s)
Introduced microprocessors, integrating the **CPU** onto a single chip, marking the advent of the **PC**(Personal Computer), reducing size and cost.
An example is Apple's **Apple II**
### Fifth Generation (1980s-Present)
Focused on **AI**(Artificial Intelligence), **quantum computing**, **nanotechnology**, and **ULSI**(ultra-large-scale integration), incorporating technologies like natural language processing, robotics, and neural networks.​
Designed to understand and process human language, learn from data, and make decisions with minimal human intervention.​
These advancements have led to significant improvements in processing power, efficiency, and the ability to perform complex tasks.
**Smartphones and Tablets** are examples of these innovations.