Reference:
1. https://dev.to/dhiwise/advanced-javascript-design-patterns-4k8l
2. https://www.toptal.com/javascript/comprehensive-guide-javascript-design-patterns
3. https://www.freecodecamp.org/news/javascript-design-patterns-explained/
4. https://blog.bitsrc.io/my-9-favorite-design-patterns-in-javascript-9d2a09651d08?gi=2446cf15ee06

Type of design patterns:

1. Creational ( Related to class instance initiation )
    Abstract Factory
    Builder
    Factory Method
    Prototype
    Singleton
2. Structural ( deals with the way objects are composed & put together)
    Adapter
    Bridge
    Composite
    Decorator
    Facade
    Flyweight
    Proxy
3. Behavioural ( how objects interact with each other)
    Chain of responsibility
    command
    interpreter
    iterator
    Mediator
    Memento
    Observer
    State
    Strategy
    Template Method
    Visitor

Anti-patterns ( Code smells ) -( What not to do ):

    1. Modifying the prototype of the instance.
    2. Syncing execution after initialization.
    3. Callback hell.

================= CREATIONAL PATTERNS =======================

Object creational - Singleton:
    Ensure a class only has one instance and provide a global point of access to it.

Object creational - Prototype:
    Specify the kinds of objects to create using prototypical instance 
    and create new objects by copying this prototype.

The Factory Pattern:
    Define an interface for creating an object, but less subclasses decide which class to instantiate.
    Factory method lets a class defer instantiation to subclasses.

The Builder patterm:
    Separate the construction of a complex object from its representation
    so that the same construction process can create different representations.

=================== STRUCTURAL PATTERNS ==================

The Adapter pattern:
    Convert the interface of the class into another clients expect.
    Adapter lets classes work together that couldn't otherwise because of 
    incompatible interfaces.

The proxy patter:
    Provide a surrogate or placeholder for another object to control access to it.

The composite pattern:
    Compose objects into tree structures to represent part-whole hierarchies. Composite lets clients
    treat individual objects and compositions of objects uniformely.

The decorator pattern:
    Attach additional responsibilities to an object dynamically. Decorators provide a flexible 
    alternative to subclassing for extending functionality.

=================== BEHAVIOURAL PATTERNS ==================

The Chain of responsibiility:
    Avoid coupling the sender of a request to its receiver by giving more than one object a
    change to handle the request. Chain the receiving objects and pass the request along the chain.

The command pattern:
    Encapsulate a request as a object, thereby letting you parameterize with different
    requests, queues or log requests, and support undoable operations.

