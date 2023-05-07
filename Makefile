.PHONY: clean
zip:
	mkdir sensei-gpt-0.1
	cp -r src/* sensei-gpt-0.1
	zip -r sensei-gpt-0.1.zip sensei-gpt-0.1/*
clean:
	rm -rf sensei-gpt-0.1 sensei-gpt-0.1.zip

