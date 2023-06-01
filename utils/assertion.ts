import { isEmpty, isNil } from 'ramda'

/**
 * Validates that the provided `value` is not `null` or `undefined`
 *
 * @param value
 * @returns `true` if `value` is **not** `null` and **not** `undefined` or
 *   `false` otherwise
 */
export function isPresent<T = unknown>(value: T): value is NonNullable<T> {
  return !isNil(value)
}

/**
 * Validates that the provided `value` is not empty.
 *
 * @param value
 * @returns `true` if `value` is an object, an array or a string with
 *   a length greater than 0.
 */
export function isPopulated<T>(value: T): value is NonNullable<T> {
  return !isEmpty(value)
}

/**
 * @returns true if `array` is an array of `TItem` items.
 *
 * @example
 * isArrayOf<User>(isUser, users)
 */
export function isArrayOf<TItem>(
  isItem: (item: unknown) => item is TItem,
  array: unknown
): array is TItem[] {
  return Array.isArray(array) && array.every(isItem)
}

export class AssertionError extends Error {
  constructor(reason: string) {
    super(`AssertionError: ${reason}`)
    Object.setPrototypeOf(this, AssertionError.prototype)
  }
}

export function assert(assertion: boolean, reason: string) {
  if (!assertion) throw new AssertionError(reason)
}

/** Throw an exception if the object is undefined or null */
export function assertNotNull<T>(
  value: T,
  reason: string
): asserts value is NonNullable<T> {
  assert(isPresent(value), `Value should not be null or undefined: ${reason}`)
}

/** Throw an exception if the array length is empty */
export function assertNotEmpty(array: unknown[]) {
  assert(isPopulated(array), `Array should not be empty`)
}
