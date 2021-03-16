//  ExampleSwiftWithReturnValue.swift
import Foundation
@objc(ExampleSwiftWithReturnValue)

class ExampleSwiftWithReturnValue: NSObject {
   @objc
   func geneateNewString() -> Void {
    
   }
  @objc func constantsToExport() -> Void {
    return [
      "x": 1,
      "y": 2,
      "z": "Arbitrary string"
    ]
  }
}
