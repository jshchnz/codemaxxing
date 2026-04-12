# test_string_slop.py
import pytest
from utils.string_slop.string_slop import *

def test_reverse_string():
    assert reverse_string('abc') == 'cba'
    assert reverse_string('') == ''
    assert reverse_string('a') == 'a'

def test_to_upper():
    assert to_upper('abc') == 'ABC'
    assert to_upper('') == ''
    assert to_upper('123') == '123'

def test_to_lower():
    assert to_lower('ABC') == 'abc'
    assert to_lower('') == ''
    assert to_lower('123') == '123'

def test_capitalize():
    assert capitalize('abc') == 'Abc'
    assert capitalize('') == ''
    assert capitalize('123') == '123'

def test_swap_case():
    assert swap_case('aBc') == 'AbC'
    assert swap_case('') == ''
    assert swap_case('123') == '123'

def test_title_case():
    assert title_case('hello world') == 'Hello World'
    assert title_case('') == ''
    assert title_case('123') == '123'

def test_trim_spaces():
    assert trim_spaces(' abc ') == 'abc'
    assert trim_spaces('') == ''
    assert trim_spaces('  ') == ''

def test_trim_left():
    assert trim_left(' abc ') == 'abc '
    assert trim_left('') == ''
    assert trim_left('  ') == ''

def test_trim_right():
    assert trim_right(' abc ') == ' abc'
    assert trim_right('') == ''
    assert trim_right('  ') == ''

def test_remove_spaces():
    assert remove_spaces('a b c') == 'abc'
    assert remove_spaces('') == ''
    assert remove_spaces('   ') == ''

def test_to_snake_case():
    assert to_snake_case('helloWorld') == 'hello_world'
    assert to_snake_case('hello world') == 'hello_world'
    assert to_snake_case('') == ''

def test_to_camel_case():
    assert to_camel_case('hello_world') == 'helloWorld'
    assert to_camel_case('hello world') == 'helloWorld'
    assert to_camel_case('') == ''

def test_mock_spongebob_case():
    assert mock_spongebob_case('hello') == 'hElLo'
    assert mock_spongebob_case('') == ''
    assert mock_spongebob_case('abc') == 'aBc'

def test_extract_vowels():
    assert extract_vowels('hello') == 'eo'
    assert extract_vowels('') == ''
    assert extract_vowels('xyz') == ''

def test_extract_consonants():
    assert extract_consonants('hello') == 'hll'
    assert extract_consonants('') == ''
    assert extract_consonants('123') == ''

def test_count_vowels():
    assert count_vowels('hello') == 2
    assert count_vowels('') == 0
    assert count_vowels('xyz') == 0

def test_count_consonants():
    assert count_consonants('hello') == 3
    assert count_consonants('') == 0
    assert count_consonants('123') == 0

def test_to_binary():
    assert to_binary('A') == '01000001'
    assert to_binary('') == ''
    assert to_binary('AB') == '01000001 01000010'

def test_from_binary():
    assert from_binary('01000001') == 'A'
    assert from_binary('') == ''
    assert from_binary('01000001 01000010') == 'AB'

def test_to_hex():
    assert to_hex('A') == '41'
    assert to_hex('') == ''
    assert to_hex('AB') == '4142'

def test_to_base64():
    assert to_base64('A') == 'QQ=='
    assert to_base64('') == ''
    assert to_base64('AB') == 'QUI='

def test_rot13():
    assert rot13('hello') == 'uryyb'
    assert rot13('') == ''
    assert rot13('abc') == 'nop'

def test_to_leet_speak():
    assert to_leet_speak('leet') == 'l337'
    assert to_leet_speak('') == ''
    assert to_leet_speak('hello') == 'h3ll0'

def test_reverse_words():
    assert reverse_words('hello world') == 'world hello'
    assert reverse_words('') == ''
    assert reverse_words('   ') == ''

def test_reverse_each_word():
    assert reverse_each_word('hello world') == 'olleh dlrow'
    assert reverse_each_word('') == ''
    assert reverse_each_word('   ') == ''

def test_is_palindrome():
    assert is_palindrome('racecar') == True
    assert is_palindrome('') == False
    assert is_palindrome('hello') == False

def test_remove_punctuation():
    assert remove_punctuation('hello, world!') == 'hello world'
    assert remove_punctuation('') == ''
    assert remove_punctuation('!!!') == ''

def test_keep_only_alpha():
    assert keep_only_alpha('h3ll0 w0rld') == 'hllwrld'
    assert keep_only_alpha('') == ''
    assert keep_only_alpha('123') == ''

def test_keep_only_digits():
    assert keep_only_digits('h3ll0 w0rld') == '300'
    assert keep_only_digits('') == ''
    assert keep_only_digits('abc') == ''

def test_shuffle_string():
    assert shuffle_string('abc') == 'bac'
    assert shuffle_string('') == ''
    assert shuffle_string('a') == 'a'

def test_sort_characters():
    assert sort_characters('cba') == 'abc'
    assert sort_characters('') == ''
    assert sort_characters('a') == 'a'

def test_remove_duplicates():
    assert remove_duplicates('hello') == 'helo'
    assert remove_duplicates('') == ''
    assert remove_duplicates('aaaa') == 'a'

def test_count_words():
    assert count_words('hello world') == 2
    assert count_words('') == 0
    assert count_words('   ') == 0

def test_first_word():
    assert first_word('hello world') == 'hello'
    assert first_word('') == ''
    assert first_word('   ') == ''

def test_last_word():
    assert last_word('hello world') == 'world'
    assert last_word('') == ''
    assert last_word('   ') == ''

def test_pad_left():
    assert pad_left('123') == '0000000123'
    assert pad_left('') == '0000000000'
    assert pad_left('12345678901') == '12345678901'

def test_pad_right():
    assert pad_right('123') == '1230000000'
    assert pad_right('') == '0000000000'
    assert pad_right('12345678901') == '12345678901'

def test_repeat_string():
    assert repeat_string('a') == 'aaa'
    assert repeat_string('') == ''
    assert repeat_string('abc') == 'abcabcabc'

def test_add_exclamation():
    assert add_exclamation('hello') == 'hello!'
    assert add_exclamation('') == '!'
    assert add_exclamation('world') == 'world!'

def test_add_question_mark():
    assert add_question_mark('hello') == 'hello?'
    assert add_question_mark('') == '?'
    assert add_question_mark('world') == 'world?'
