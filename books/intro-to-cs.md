#### Intro to Computer Science

* 1.1 The Universal Machine
  * **Computer:**  a machine that stores and manipulate information under the control of a changeable program.
  * **Computer Program:** a detailed, step-by-step set of instructions telling a computer exactly what to do

* 1.2 Program Power
  * Programming develops the skill to analyze complex systems by reducing them into interactions of understandable subsystems

* 1.3 What is Computer Science?
  * The fundamental question of computer science is: _What can be computed?_
  * The three main techniques investigating this questions are: _design, analysis,_ and _experimentation_
  * **Algorithm:** a step-by-step process for achieving a desired result.
    * Some problems are not solvable by _any_ algorithm.  This is why mathematical _analysis_ of a problem is also use.
    * **Intractable Algorithms:** an algorithm that takes too long or requires too much memory to be of practical value.

* 1.4 Hardware Basics
  * **CPU:** central processing unit, the "brain" of the computer.  This is where all the basic operations of the computer is carried out.
  * **Main Memory (RAM or _Random Access Memory_):** The memory stores programs and data.  The CPU can only directly access information that is store in main memory.  Fast, but is volatile: _When the computer turns off, the memory is lost._  There must be a secondary memory that provides permanent storage.
  * **Hard Drive:** Is the secondary memory.

* 1.5 Programming Languages
* **Programming Languages:**  notations for expressing computations in an exact and unabigious way.
* **Compiling/Interpreted:** translating a high-level language into the machine language that the computer can execute
* **Compiler:** a complex computer program that takes another program written in a high-evel language and transltates it into an equivalent program in the machine language of the computer. The high-level program is called the _source code_ and the machine langauge is called the _machine code_.

    ![pic](../img/intro-to-cs/01.png)

* **Interpreter:** a program that simulates a computer that understands a high-level language.

    ![pic](../img/intro-to-cs/02.png)

* **Compiling vs Interpreting:**
    * compiling is a one-shot translation.  Once a program is compiled, it may be run over and over again without further need for the compiler or the source code.
    * interpreting requires the interpreter and the source everytime for the program to run.
    * compiled languages tend to be faster, since the translation is done once and for all.  interpreted languages lend themselves to a more flexible programming environment.