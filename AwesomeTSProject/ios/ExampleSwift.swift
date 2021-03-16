// ExampleSwift.swift
import Foundation

@objc(ExampleSwift)

class ExampleSwift: NSObject {
  private var count = 0
   @objc
   func increment() {
     count += 1
     print("count is \(count)")
   }
}
